const path = require('path');

module.exports = {
    mode : 'development',
    entry : './src/js/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'public/')
    },
    module : {
        rules : [{
            test : /\.js$/,
            exclude : /node_modules/,
            loader : 'babel-loader'
        },
        {
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        }
        // {
        //     test : /\.scss$/,
        //     use : ['sass-loader']
        // }
    ]
    },
    // devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        compress: true,
        port: 3000
    }
}