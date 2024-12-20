const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@evilemon/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc"
      },
    ],
  ],
};
