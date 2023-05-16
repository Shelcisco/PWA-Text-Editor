const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

new WorkboxWebpackPlugin.InjectManifest({
  swSrc: './src/sw.js', 
  swDest: 'service-worker.js', 
}),

// TODO: Add CSS loaders and babel to webpack.
new WebpackPwaManifest({
  filename: 'manifest.json',
  name: 'My App',
  short_name: 'App',
  description: 'My Progressive Web App',
  background_color: '#ffffff',
  theme_color: '#000000',
  icons: [
    {
      src: path.resolve('src/assets/icon.png'),
      sizes: [96, 128, 192, 256, 384, 512], 
      destination: path.join('assets', 'icons'),
    },
  ],
}),

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};