import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const prefix = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '');
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
    entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
}
const pages = walk('dist').filter(file => file.endsWith('.html'));
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical?.startsWith('https://800roofs.com/'), `Invalid canonical: ${file}`);
  assert(!canonical.startsWith(`https://800roofs.com${prefix}/`) || !prefix, `Preview path in canonical: ${file}`);
  assert(html.includes(`href="${prefix}/_astro/`), `Missing stylesheet path: ${file}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    assert(!prefix || url.startsWith(`${prefix}/`), `Wrong deployment prefix: ${url}`);
    const local = prefix ? url.slice(prefix.length) : url;
    assert(existsSync(join('dist', local)) || existsSync(join('dist', local, 'index.html')), `Missing target: ${url}`);
  }
}
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
assert(!prefix || !sitemap.includes(`https://800roofs.com${prefix}/`), 'Preview path leaked into sitemap');
assert(readFileSync('dist/CNAME', 'utf8').trim() === '800roofs.com');
console.log(`Verified ${pages.length} pages at ${prefix || '/'}: CSS, images, internal links, production canonicals, sitemap, and CNAME.`);
