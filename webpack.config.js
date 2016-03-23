const merge = require('webpack-merge');
const webpack = require('webpack');
const TARGET = process.env.npm_lifecycle_event;
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build : path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry : PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output : {
   path: PATHS.build,
   filename : 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test : /\.jsx?$/,
        loaders : ['babel?cacheDirectory'],
        include : PATHS.app
      },
      {
        test   : /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader',
        include : PATHS.app
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    ]
  });
}

if(TARGET === 'deploy') {
  module.exports = merge(common, {});
}
