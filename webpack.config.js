var path = require("path");
module.exports = {
    'entry' : './client.js',
    'output' : {
        path: path.resolve("./public"),
        filename : 'bundle.js',
        publicPath:'/'
    },
    
   module:{ 
       loaders : [
                {
                    test: /\.js$/,
                    exclude : /node_modules/,
                    loader : 'babel-loader',
                    query: {
                        presets: ['react','es2015','stage-0']
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
