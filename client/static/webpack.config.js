var webpack = require('webpack');

module.exports = {
    
    entry : {
        'view/main/index': './js/view/main/index.js'
    },
    
    output : {
        path : __dirname + '/output/js/',
        filename : '[name].bundle.js'
    },
    module: {
        
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]        
    },
    
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}