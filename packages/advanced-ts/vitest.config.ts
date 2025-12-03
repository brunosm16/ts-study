import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    pool: 'threads',
    testTimeout: 10000,
    fakeTimers: {
      toFake: ['setTimeout', 'clearTimeout', 'Date'],
    },
    coverage: {
      reporter: [['text', { maxCols: 120 }], 'json-summary', 'html', 'lcov'],
      include: ['src/**'],
      provider: 'v8',
    },
  },
});
