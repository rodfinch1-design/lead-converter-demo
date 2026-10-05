// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://rodfinch1-design.github.io/lead-converter-demo/
export default defineConfig({
  site: 'https://rodfinch1-design.github.io',
  base: '/lead-converter-demo',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },   // one less request on the critical path
});
