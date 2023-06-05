module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/sounds/',
        outputPath: 'static/sounds/',
        name: '[name].[ext]',
        esModule: false,
      },
    });

    return config;
  },
};
