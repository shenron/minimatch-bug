module.exports = {
  presets: [
    '@vue/babel-preset-jsx',
    ['@vue/cli-plugin-babel/preset', {
      targets: { esmodules: true },
      polyfills: [],
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
  ],
};
