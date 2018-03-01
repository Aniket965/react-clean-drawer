
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const PATH = {
  src: path.join(__dirname, './src'),
  lib: path.join(__dirname, './lib'),
  dist: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example'),
  root: path.join(__dirname, './')
};
const css = 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
const sass = `${css}!sass`;
const extractCSS = new ExtractTextPlugin({filename: 'react-clean-drawer-l.css', allChunks: true});
const uglify = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  minimize: true,
  compress: {
    warnings: false
  }
});

const CONFIG = {
  entry: path.join(PATH.src, 'index.js'),
  externals: {
    'react': 'react',
    'react-dom' : 'reactDOM'
  },
  devServer: {
    contentBase: PATH.root,
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: css
            }
          }
        })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: sass
            }
          },{
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    extractCSS
  ]
};

const umd = Object.assign({}, CONFIG, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactCleanDrawer',
    filename: 'react-clean-drawer.js',
    path: PATH.lib
  }
});

const umdMinified = Object.assign({}, umd, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactCleanDrawer',
    filename: 'react-clean-drawer.min.js',
    path: PATH.lib
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    extractCSS,
  ]
});

module.exports = [umd, umdMinified];