

var webpack = require('webpack'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    Dashboard = require('webpack-dashboard'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    WebpackDevServer = require('webpack-dev-server'),
    CleanPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var dashboard = new Dashboard();

// var getEntry = function() {
//     var entry = {};
//     //读取开发目录,并进行路径裁剪
//     glob.sync('./src/**/*.es6')
//         .forEach(function(name) {
//             var start = name.indexOf('src/') + 4,
//                 end = name.length - 3;
//             var n = name.slice(start, end);
//             n = n.slice(0, n.lastIndexOf('/'));
//             //保存各个组件的入口
//             entry[n] = name;
//         });
//     return entry;
// };

module.exports = {
    entry: {
        path: path.join(__dirname, './src/app/app')
    },
    // entry: getEntry(),
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: 'babel-loader'
            },
            {
                test: /\.coffee$/,
                loader: 'coffee-loader'
            },
            {
                test: /\.css$/, 
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.coffee', '.es6']
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new CleanPlugin(['dist']),
        // 启动热替换
        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({
            url: 'http://localhost:3002/'
        }),
        // new DashboardPlugin
        new DashboardPlugin(dashboard.setData)
    ],
}

module.exports.devtool = 'source-map';
module.exports.devServer = {
    port: 3002,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    publicPath: "",
    stats: {
        colors: true
    }
};
