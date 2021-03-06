const path = require("path");
const webpack = require("webpack");

module.exports = {
    colors: true,
    context: __dirname,
    devtool: "#source-map",
    entry: [
        "babel-polyfill",
        "./src/index.jsx"
    ],
    devServer: {
        colors: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: [ 'react-hot', 'babel', 'react-map-styles' ], include: path.join(__dirname, 'src') },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.json?$/, loader: 'json-loader' },
            { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: '/'
    }
};
