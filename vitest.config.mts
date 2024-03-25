import path from 'path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
      include: ['**/*.svg'],
    }),
  ],
  resolve: {
    alias: {
      'aelf-design': resolve('./packages/web3/src/index'),
      '@aelf-design/icons': resolve('./packages/icons/src/index'),
      '@aelf-design/common': resolve('./packages/common/src/index'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['./packages/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: ['packages/*/src/**/*.{tx,tsx}'],
      exclude: ['**/demos/*.tsx'],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
  },
});
