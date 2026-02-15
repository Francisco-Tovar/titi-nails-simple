import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration with React support. The base path will be updated
// automatically by GitHub Pages when deploying from a repository root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});