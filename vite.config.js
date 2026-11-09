import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  build: {
    // Skill icons load lazily as files; inlining them would bloat the entry bundle.
    assetsInlineLimit: (file) => (file.includes('devicon') ? false : undefined),
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client'],
          motion: ['motion/react'],
          gsap: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', '@gsap/react', 'lenis'],
        },
      },
    },
  },
});
