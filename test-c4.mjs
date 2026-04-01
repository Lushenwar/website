import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';

const ROOT = process.cwd();
const MIME = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript' };

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
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    sessionStorage.setItem('unlocked', '1');
    document.getElementById('gate').style.display = 'none';
    document.getElementById('portfolio').style.opacity = '1';
    document.getElementById('portfolio').style.pointerEvents = 'auto';
  });

  await page.evaluate(() => document.querySelector('[data-section="sec-games"]').click());
  await new Promise(r => setTimeout(r, 500));

  await page.evaluate(() => document.querySelector('[data-game="connect4"]').click());
  await new Promise(r => setTimeout(r, 500));

  console.log("Clicking column 3...");
  await page.evaluate(() => {
    const btn = document.querySelector('.c4-col-btn[data-c="3"]');
    if (btn) btn.click();
    else console.log("Button not found!");
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  const state = await page.evaluate(() => {
    const cells = document.querySelectorAll('.c4-board .c4-cell');
    let pieces = 0;
    cells.forEach(c => { if (c.textContent.trim() !== '') pieces++; });
    return pieces;
  });
  console.log("Pieces placed:", state);

  await browser.close();
  server.close();
});
