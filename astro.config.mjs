import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dev-pongsit.github.io',
  base: '/Test-102/',
  output: 'static',
  trailingSlash: 'always',
  prefetch: false,
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      CSS: true,
      SVG: false,
      Image: false,
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true
        },
      },
      JavaScript: {
        'terser': {
          compress: {
            drop_console: true,
            drop_debugger: true,
          }
        }
      }
    })
  ]
});
