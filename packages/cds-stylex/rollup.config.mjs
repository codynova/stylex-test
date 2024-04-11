import path from 'node:path'
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: './src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.devDependencies),
    /react/,
    /@babel\/runtime/
  ],
  output: [
    {
      format: 'esm',
      entryFileNames: '[name].js',
      dir: path.dirname(pkg.module),
      preserveModules: true,
    },
    {
      format: 'cjs',
      entryFileNames: '[name].js',
      dir: path.dirname(pkg.main),
      preserveModules: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'runtime',
    }),
  ],
}
