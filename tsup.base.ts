import type { Options } from 'tsup';

export const commons: Options = {
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: true,
  removeNodeProtocol: false,
  sourcemap: false,
  splitting: false,
};