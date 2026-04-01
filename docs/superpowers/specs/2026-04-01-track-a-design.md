# Track A Design Spec — Game Fixes + Astronaut Gatekeeper
**Date:** 2026-04-01
**Status:** Approved
**Scope:** Objective 1 (fix all 13 hub games) + Objective 4 (Astronaut gatekeeper mechanic)

---

## 1. Problem Statement

The portfolio has three disconnected systems — a front-door gate, a per-project mini-gate modal, and a games hub — each with their own duplicated game implementations. The hub games are architecturally broken due to two root causes:

1. **Hidden-DOM initialization:** `initGamesHub()` runs at DOMContentLoaded and immediately renders Wordle into a hidden, non-active section. While this doesn't crash most games, it establishes a fragile init-before-visible pattern.
2. **Keydown listener collision:** Games that attach `document.keydown` handlers rely on `arena._cleanup` by convention. If cleanup is not called on every code path (e.g., navigating away from the games tab while mid-game), listeners stack and fight each other.

Additionally, the astronaut SVG (`#faller`) is purely decorative (`pointer-events: none`) with no connection to the gate or unlock systems.

---

## 2. Architecture: Unified GameRegistry

Replace all three game systems with a single `GameRegistry`:

```js
const GameRegistry = {
  wordle:      (container, onWin) => { /* ... */ return cleanup },
  connections: (container, onWin) => { /* ... */ return cleanup },
  spelling:    (container, onWin) => { /* ... */ return cleanup },
  crossword:   (container, onWin) => { /* ... */ return cleanup },
  pinpoint:    (container, onWin) => { /* ... */ return cleanup },
  tango:       (container, onWin) => { /* ... */ return cleanup },
  numberlink:  (container, onWin) => { /* ... */ return cleanup },
  queens:      (container, onWin) => { /* ... */ return cleanup },
  sudoku:      (container, onWin) => { /* ... */ return cleanup },
  mathlab:     (container, onWin) => { /* ... */ return cleanup },
  rps:         (container, onWin) => { /* ... */ return cleanup },
  tictactoe:   (container, onWin) => { /* ... */ return cleanup },
  connect4:    (container, onWin) => { /* ... */ return cleanup },
};
```

**Contract:**
- Every factory accepts `(container, onWin = null)`.
- `onWin` is called exactly once when the player wins. Hub-only games can ignore it; gatekeeper games must call it.
- Every factory returns a `cleanup` function (removes event listeners, cancels timers). Callers are responsible for calling cleanup before reinitializing.

**Gatekeeper pool** (have `onWin` wired): `mathlab`, `connections`, `tictactoe`, `connect4`.
**Hub-only** (onWin ignored): `wordle`, `spelling`, `crossword`, `pinpoint`, `tango`, `numberlink`, `queens`, `sudoku`, `rps`.

---

## 3. Objective 1 — Fix All 13 Hub Games

### 3.1 Hub Initialization Refactor

`initGamesHub` is refactored as follows:

- **No game is initialized at DOMContentLoaded.** The function only sets up card click handlers and a tab-activation listener.
- When the user first clicks the **games tab**, the active game (`wordle` by default) is initialized into the arena.
- On every game card click: call the current game's `cleanup()`, clear `arena.innerHTML`, initialize the new game via `GameRegistry[id](arena)`, store the new cleanup reference.
- This guarantees games are always initialized into a visible, correctly-dimensioned container.

### 3.2 Keyboard Listener Fix

All games that add `document.keydown` handlers must return a cleanup function that removes them. The hub always calls `cleanup()` before switching. This eliminates stacking entirely — no guards, no conventions, enforcement by structure.

### 3.3 Per-Game Fixes

| Game | Known issue | Fix |
|---|---|---|
| Wordle | Keydown guard checks `sec-games.active` (works, but fragile) | Cleanup-by-return pattern removes the need for the guard |
| Spelling Bee | Same keydown guard issue | Same fix |
| Sudoku | Keydown handler; `su-board` grid needs correct dimensions at init | Lazy init ensures dimensions are correct |
| Crossword | Keydown + click handlers; `cw-board` grid rendering | Lazy init + cleanup-by-return |
| Pinpoint | No keydown issue; focus call on hidden input may fail | `setTimeout(() => inp?.focus(), 50)` already handles this |
| Tango | Click-only, no keydown; should be fine | Verify on first switch |
| Numberlink | Mouse drag across board; `mouseup` is on `document` — must be cleaned up | Add `document mouseup` to returned cleanup |
| Queens | Click-only; no external listeners | Verify render |
| Math Lab | No external listeners | Verify render |
| RPS (hub) | No external listeners | Verify render |
| Tic-Tac-Toe (hub) | No external listeners | Verify render |
| Connect 4 | No external listeners | Verify render |
| Connections | No external listeners; already works | No change needed beyond registry adoption |

---

## 4. Objective 4 — Astronaut Gatekeeper

### 4.1 Astronaut State Machine

The `#faller` element gains a 3-state machine managed by `AstronautGate`:

```
idle  ──(project clicked, not yet beaten)──▶  intercepting
intercepting  ──(player wins)──▶  defeated
defeated  ──(animation complete)──▶  idle
```

**`idle`** (default):
Current scroll-following `requestAnimationFrame` loop. `pointer-events: none`. No changes to existing `initFaller` behavior.

**`intercepting`**:
Triggered by a project card click before the project is unlocked. Steps:
1. Astronaut loop pauses.
2. Astronaut snaps (CSS transition, 300ms) to a fixed position near the top-center of the viewport.
3. `pointer-events: auto` is set.
4. A speech bubble div is appended (or shown) on the astronaut: *"The Astronaut blocks your path. Defeat them to continue."*
5. After the snap animation, the Astronaut modal opens.

**`defeated`**:
Triggered when the player wins the gatekeeper game. Steps:
1. Astronaut plays a CSS keyframe animation: rapid spin + scale-down + fade-out (~600ms).
2. Modal closes.
3. Project card opens via `toggleCard`.
4. After animation, astronaut resets to `idle` state (invisible briefly, then resumes scroll-follow).

### 4.2 Front-Door Gate

`GAMES` array is replaced:
```js
const GATEKEEPER_GAMES = ['mathlab', 'connections', 'tictactoe', 'connect4'];
```

The front-door `#game-container` uses `GameRegistry[selectedGame](container, onWin)` where `onWin = () => AstronautGate.unlock('global')`.

`AstronautGate.unlock('global')`:
- Calls existing `unlockPortfolio()` logic (gate fade-out, portfolio fade-in, sessionStorage write).
- Astronaut begins in `idle` state once portfolio is visible.

Old `initRPS`, `initTTT`, `initMath` (gate-specific mini versions) are deleted.

### 4.3 Per-Project Mini-Gate (Astronaut Modal)

The existing `#mini-gate` modal HTML is updated:
- Eyebrow: *"incoming threat"*
- Title: *"The Astronaut blocks your path"*
- Subtext: *"Beat them to unlock this project"*

`showMiniGate` is replaced by `AstronautGate.intercept(projectId, projectName, onProjectOpen)`:
- Sets astronaut state to `intercepting`.
- Picks a random game from `GATEKEEPER_GAMES`.
- Renders it via `GameRegistry[game](container, onWin)`.
- `onWin = () => AstronautGate.unlock('project', { projectId, onProjectOpen })`.

`AstronautGate.unlock('project', { projectId, onProjectOpen })`:
- Sets astronaut state to `defeated`.
- Stores `sessionStorage.setItem('proj_${projectId}', '1')`.
- Calls `onProjectOpen()` (which calls `toggleCard`).
- Resets astronaut to `idle` after defeat animation.

### 4.4 `onWin` Dual-State Contract Summary

```
AstronautGate.unlock('global')
  → unlockPortfolio() → portfolio visible

AstronautGate.unlock('project', { projectId, onProjectOpen })
  → astronaut defeated animation
  → modal close
  → sessionStorage.setItem('proj_${projectId}', '1')
  → onProjectOpen() (toggleCard)
  → astronaut resets to idle
```

---

## 5. Style Continuity

- No new fonts, color variables, or design tokens introduced.
- Astronaut speech bubble uses existing `.gate-sub` text style and `var(--ink-faint)` border.
- Defeat animation uses only CSS keyframes (no JS animation library).
- Modal copy changes only; layout and visual treatment of `#mini-gate` are preserved.
- All existing CSS classes for all 13 games are retained; no class renames.

---

## 6. Deletions

The following functions are removed as dead code after the registry is in place:
- `initRPS(container)` — gate-specific mini RPS
- `initTTT(container)` — gate-specific mini TTT
- `initMath(container)` — gate-specific mini Math
- `initMiniRPS(container, onWin)` — mini-gate RPS
- `initMiniMath(container, onWin)` — mini-gate Math

The `GAMES` constant is replaced by `GATEKEEPER_GAMES`.

---

## 7. Files Changed

| File | Changes |
|---|---|
| `script.js` | GameRegistry, refactored hub init, AstronautGate state machine, deletions |
| `index.html` | Mini-gate copy update, no structural changes |
| `style.css` | Astronaut speech bubble styles, defeat keyframe animation |

---

## 8. Out of Scope (Track B)

- 3D graph upgrade (Obj 2)
- Project chatbot (Obj 3)

