import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajoute cette ligne avec le nom EXACT de ton dépôt GitHub entre les slashs
  base: '/react-pokedex/',
})