import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';

const ROOT = process.cwd();
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.svg':'image/svg+xml' };

const server = createServer((req, res) => {
  const p = join(ROOT, req.url === '/' ? 'index.html' : req.url);
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'text/plain' });
  res.end(readFileSync(p));
});

server.listen(0, async () => {
  const port = server.address().port;
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Collect console errors
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0' });

  // Skip the gate by setting sessionStorage
  await page.evaluate(() => {
    sessionStorage.setItem('gateCleared', '1');
    document.getElementById('gate').style.display = 'none';
    document.getElementById('portfolio').style.opacity = '1';
    document.getElementById('portfolio').style.pointerEvents = 'auto';
  });

  // Click games tab
  await page.evaluate(() => {
    const tab = document.querySelector('[data-section="sec-games"]');
    if (tab) tab.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const games = ['wordle','connections','spelling','crossword','pinpoint','tango','numberlink','queens','sudoku','mathlab','rps','tictactoe','connect4'];

  for (const g of games) {
    // Click the game card
    await page.evaluate((game) => {
      const card = document.querySelector(`[data-game="${game}"]`);
      if (card) card.click();
    }, g);
    await new Promise(r => setTimeout(r, 300));

    // Check arena content
    const info = await page.evaluate(() => {
      const arena = document.getElementById('games-arena');
      if (!arena) return { error: 'no arena' };
      return {
        innerHTML_length: arena.innerHTML.length,
        childCount: arena.children.length,
        firstChild: arena.children[0]?.tagName + '.' + arena.children[0]?.className,
        offsetHeight: arena.offsetHeight,
        firstChildHeight: arena.children[0]?.offsetHeight || 0,
        firstChildWidth: arena.children[0]?.offsetWidth || 0,
        visible: arena.children[0]?.offsetHeight > 0 && arena.children[0]?.offsetWidth > 0,
        textContent_snippet: arena.textContent?.substring(0, 100),
      };
    });

    console.log(`${g}: visible=${info.visible} size=${info.firstChildWidth}x${info.firstChildHeight} children=${info.childCount} html_len=${info.innerHTML_length}`);
    if (!info.visible) {
      console.log(`  DETAILS: ${JSON.stringify(info)}`);
    }
  }

  if (errors.length) console.log('\nJS ERRORS:', errors);

  await browser.close();
  server.close();
});
