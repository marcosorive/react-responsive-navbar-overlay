var path = require('path');
module.exports = {
    output: {      
      path: path.join(__dirname, './dist'),      
      filename: 'main.js',      
      library: "react-responsive-navbar-overlay",      
      libraryTarget: 'umd',      
      publicPath: '/dist/',      
      umdNamedDefine: true  
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {          
          'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
      }  
    },
    externals: {      
      // Don't bundle react or react-dom      
      react: {          
          commonjs: "react",          
          commonjs2: "react",          
          amd: "React",          
          root: "React"      
      },      
      "react-dom": {          
          commonjs: "react-dom",          
          commonjs2: "react-dom",          
          amd: "ReactDOM",          
          root: "ReactDOM"      
      }  
    } 
  };