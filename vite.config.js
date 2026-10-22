import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'criminal-defense-static-content',
      transformIndexHtml: {
        order: 'post',
        handler(html, context) {
          const filename = context.filename.replaceAll(String.fromCharCode(92), '/')
          if (!filename.endsWith('/practice-areas/criminal-defense/index.html')) return html
          const content = readFileSync(new URL('./src/criminal-defense-content.html', import.meta.url), 'utf8')
          return html.replace('<div id="root"></div>', '<div id="root"><main id="main" class="criminal-defense-page">' + content + '</main></div>')
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
        'employment-law': fileURLToPath(new URL('./practice-areas/employment-law/index.html', import.meta.url)),
        calljay: fileURLToPath(new URL('./calljay-preview.html', import.meta.url)),
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        clientLogin: fileURLToPath(new URL('./client-login/index.html', import.meta.url)),
        resources: fileURLToPath(new URL('./resources/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./who-is-jay-for-justice/index.html', import.meta.url)),
      },
    },
  },
})
