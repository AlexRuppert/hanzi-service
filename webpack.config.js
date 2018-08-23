const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // sourceMapFilename: 'index.map',
    libraryTarget: 'commonjs2',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  //devtool: 'source-map',
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: nodeExternals({
    modulesFromFile: true,
    whitelist: [
      /\.(eot|woff|woff2|ttf|otf)$/,
      /\.(svg|png|jpg|jpeg|gif|ico|webm)$/,
      /\.(mp4|mp3|ogg|swf|webp)$/,
      /\.(css|scss|sass|less|styl)$/,
    ],
  }),
  plugins: [
    new webpack.BannerPlugin({
      raw: true,
      entryOnly: false,
      banner: `require('${
        // Is source-map-support installed as project dependency, or linked?
        require.resolve('source-map-support').indexOf(process.cwd()) === 0
          ? // If it's resolvable from the project root, it's a project dependency.
            'source-map-support/register'
          : // It's not under the project, it's linked via lerna.
            require.resolve('source-map-support/register')
      }')`,
    }),
    new friendlyErrorsWebpackPlugin({
      clearConsole: process.env.NODE_ENV === 'development',
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
    ],
  },
}
