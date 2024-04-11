import tseslint from 'typescript-eslint'
import stylex from '@stylexjs/eslint-plugin'

export default {
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    '@stylexjs': stylex,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  rules: {
    '@stylexjs/valid-styles': ['error'],
  },
}
