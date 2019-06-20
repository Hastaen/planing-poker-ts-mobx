module.exports = {
    //parser: 'sugarss',
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      'postcss-custom-properties': {},
      'postcss-initial': {
        reset: 'all'
      },
      'cssnano': {}
    }
  }