import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020', // Ensure Vite builds with ES2020 (BigInt supported)
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020', // Fix for dependencies (like `ox`)
    }
  },
  esbuild: {
    target: 'es2020', // Fix for main app code
  }
});
