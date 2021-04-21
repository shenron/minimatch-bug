// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
    },
  },
  configureWebpack: {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      }),
    ],
  },
  lintOnSave: true,
  css: {
    // use global css for vuetify
    // requireModuleExtension: false,
  },
  chainWebpack: (config) => {
    config.resolve.extensions
      .prepend('.vue')
      .prepend('.ts')
      .prepend('.tsx');

    config.module
      .rule('compile')
      .test(/\.(ts|js)x?$/)
      .use('babel')
      .loader('babel-loader');
  },
  devServer: {
    watchOptions: {
      ignored: {},
    },
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      '/query': {
        target: 'http://localhost:8080/query',
        changeOrigin: true,
        pathRewrite: { '^/query': '' },
      },
    },
  },
};
