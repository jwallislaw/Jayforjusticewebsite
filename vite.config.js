import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
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
            bankruptcy: { source: './src/bankruptcy-content.html', className: 'practice-landing-page' },
            'employment-law': { source: './src/employment-law-content.html', className: 'practice-landing-page' },
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
        bankruptcy: fileURLToPath(new URL('./practice-areas/bankruptcy/index.html', import.meta.url)),
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
