const path = require("path");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = {
  entry: {
    main: ['./src/main.ts'],
    polyfills: ['./src/polyfills.ts'],
    styles: ['./src/styles.scss']
  },
  output: {
    path: path.resolve(__dirname + '/dist/build/'),
    filename: '[name].min.js',
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      filter: function(manifestObj){
        return manifestObj.name.endsWith('.js') || manifestObj.name.endsWith('.css')
      },
      seed: {
        resources: {
          js: ['runtime.js', 'polyfills.js', 'scripts.js', 'main.js'],
          css: ['styles.css']
        }
      }
    }),
    //new WebpackShellPlugin({onBuildStart:['node version.js']})
  ]
};
