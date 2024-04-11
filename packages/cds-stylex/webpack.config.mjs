import path from 'node:path'
import { fileURLToPath } from 'node:url'
import StylexPlugin from '@stylexjs/webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default (env, argv) => ({
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].js',
    // publicPath: '/',
  },
  resolve: {
    // modules: ['node_modules'],
    // exportsFields: ['exports'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // alias:
    //   argv.mode === 'development'
    //     ? {
    //         'cds-stylex': path.resolve(
    //           __dirname,
    //           '../../packages/cds-stylex/src',
    //         ),
    //       }
    //     : {},
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      // {
      //   test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
      //   type: 'asset',
      // },
    ],
  },
  plugins: [
    // new StylexPlugin({
    //   filename: 'styles.css',
    //   dev: argv.mode === 'development',
    //   // Required for CSS variable support
    //   unstable_moduleResolution: {
    //     rootDir: __dirname,
    //   },
    // }),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // ignoreOrder: true,
    }),
  ],
})
