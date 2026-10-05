import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'criminal-defense': fileURLToPath(new URL('./practice-areas/criminal-defense/index.html', import.meta.url)),
        'bankruptcy': fileURLToPath(new URL('./practice-areas/bankruptcy/index.html', import.meta.url)),
        'divorce-family-law': fileURLToPath(new URL('./practice-areas/divorce-family-law/index.html', import.meta.url)),
        'traffic-tickets': fileURLToPath(new URL('./practice-areas/traffic-tickets/index.html', import.meta.url)),
        'employment-law': fileURLToPath(new URL('./practice-areas/employment-law/index.html', import.meta.url)),
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        clientLogin: fileURLToPath(new URL('./client-login/index.html', import.meta.url)),
        resources: fileURLToPath(new URL('./resources/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./who-is-jay-for-justice/index.html', import.meta.url)),
      },
    },
  },
})
