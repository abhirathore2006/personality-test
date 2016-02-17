var path = require("path");
var webpack = require("webpack");

module.exports = {
    'entry' : [
        'webpack-hot-middleware/client',
        './client.js'
        
        ],
    'output' : {
        path: path.resolve("./public"),
        filename : 'bundle.js',
        publicPath:'/'
    },
    plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
   module:{ 
       loaders : [
                {
                    test: /\.js$/,
                    exclude : /node_modules/,
                    loader : 'babel-loader',
                    query: {
                        presets: ['react','es2015','stage-0','react-hmre']
                    }
                    
                },
                
                {
                    test : /\.scss$/,
                    include : path.resolve("./public/css"),
                    loader: "style!css!sass"
                }
        ]
   }    
};
