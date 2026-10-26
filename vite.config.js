import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'google-ads-tag',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          // Keep the shared Google Ads tag on every HTML entry point.
          return html.replace('<head>', `<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18530221048"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18530221048');
      // Contact clicks only: a click does not confirm a connected call or sent text.
      function gtag_report_conversion() {
        gtag('event', 'conversion', {
          'send_to': 'AW-18530221048/R18LCMDulqYdEPj38oNF'
        });
      }
      document.addEventListener('click', function (event) {
        if (event.defaultPrevented) return;
        var link = event.target.closest && event.target.closest('a[href]');
        if (link && /^(tel:|sms:)/i.test(link.getAttribute('href'))) {
          gtag_report_conversion();
        }
      });
    </script>`)
        },
      },
    },
    {
      name: 'practice-area-static-content',
      transformIndexHtml: {
        order: 'post',
        handler(html, context) {
          const filename = context.filename.replaceAll(String.fromCharCode(92), '/')
          const entries = {
            'criminal-defense': { source: './src/criminal-defense-content.html', className: 'practice-landing-page criminal-defense-page' },
            'divorce-family-law': { source: './src/divorce-family-law-content.html', className: 'practice-landing-page' },
            'personal-injury': { source: './src/personal-injury-content.html', className: 'practice-landing-page' },
          }
          const slug = Object.keys(entries).find(key => filename.endsWith('/practice-areas/' + key + '/index.html'))
          if (!slug) return html
          const entry = entries[slug]
          const content = readFileSync(new URL(entry.source, import.meta.url), 'utf8')
          return html.replace('<div id="root"></div>', '<div id="root"><main id="main" class="' + entry.className + '">' + content + '</main></div>')
        },
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        'criminal-defense': fileURLToPath(new URL('./practice-areas/criminal-defense/index.html', import.meta.url)),
        'personal-injury': fileURLToPath(new URL('./practice-areas/personal-injury/index.html', import.meta.url)),
        'divorce-family-law': fileURLToPath(new URL('./practice-areas/divorce-family-law/index.html', import.meta.url)),
        'traffic-tickets': fileURLToPath(new URL('./practice-areas/traffic-tickets/index.html', import.meta.url)),
        'business-litigation-startups': fileURLToPath(new URL('./practice-areas/business-litigation-startups/index.html', import.meta.url)),
        calljay: fileURLToPath(new URL('./calljay-preview.html', import.meta.url)),
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        clientLogin: fileURLToPath(new URL('./client-login/index.html', import.meta.url)),
        resources: fileURLToPath(new URL('./resources/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./who-is-jay-for-justice/index.html', import.meta.url)),
      },
    },
  },
})
