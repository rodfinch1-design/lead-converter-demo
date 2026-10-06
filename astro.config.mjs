// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The demo is noindex, and Google says noindex pages don't belong in a sitemap: so the sitemap only lists pages
// in an indexable build (PUBLIC_INDEXABLE=1, the switch a real client's site would flip). The thank-you page never goes in.
const indexable = process.env.PUBLIC_INDEXABLE === '1';

// GitHub Pages project site: https://rodfinch1-design.github.io/lead-converter-demo/
export default defineConfig({
  site: 'https://rodfinch1-design.github.io',
  base: '/lead-converter-demo',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },   // one less request on the critical path
  integrations: [sitemap({ filter: (page) => indexable && !page.includes('/thank-you') })],
});
