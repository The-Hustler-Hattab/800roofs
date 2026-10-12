import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// GitHub supplies /800roofs for its repository URL and an empty path for the custom domain.
const base = process.env.PAGES_BASE_PATH || '/';
const prefix = base.replace(/\/$/, '');
export default defineConfig({
  site: 'https://800roofs.com',
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap({ serialize(item) {
    const url = new URL(item.url);
    if (prefix && url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
    return { ...item, url: url.href };
  } })],
  vite: { plugins: [tailwindcss()] },
});
