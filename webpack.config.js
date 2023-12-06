//node script, node is just javascript p much

const path = require('path');

//entry -> output, module.exports is a node thing
module.exports = (env) => {

    const isProduction = env.production === true;

    return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    }, //loader below
    module: {
        //rules for when to run the module and what loader
        //the // means a regular expression, use is an array of loaders
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, 
            use: [
                'style-loader',
                'babel-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //creating a source map to help find errors and such
    //look at the webpack documentation to find all the tools
    devtool: 'eval-cheap-module-source-map',

    //dev-server is generating its own bundle.js file, replaces live server
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    mode: 'development'
    }
};

