import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-pokedex/', // Assure-toi que c'est le nom EXACT de ton dépôt GitHub
})