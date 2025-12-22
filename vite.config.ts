import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/I.F.A.Portfolio/', // <--- important for GitHub Pages
  plugins: [react()],
});
