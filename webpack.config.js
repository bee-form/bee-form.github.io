const path = require("path");

module.exports = {
    cache: true,
    // devtool: "eval",
    entry: ["./src/pages/loader.jsx"],
    output: {
        path: `${__dirname}/dist/js`,
        filename: "loader.js"
    },
    performance: {
        hints: false, // enum
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,

                exclude: (input) => {
                    if (input.indexOf("node_modules/") > -1) {
                        return true;
                    }
                    return input.indexOf("bee-form/") > -1 || input.indexOf("bee-form-react/") > -1;
                },
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['env', 'stage-0', "react"],
                }

            },
            {
                test: /\.txt$/,

                // exclude: (input) => {
                //     if (input.indexOf("node_modules/") > -1) {
                //         return true;
                //     }
                //     return input.indexOf("bee-form/") > -1 || input.indexOf("bee-form-react/") > -1;
                // },
                loader: 'raw-loader',

            },
        ],
    },
    resolve: {
        // root: __dirname + "/src/js",
        extensions: ['.js', '.jsx'],
        alias: {
            "react": path.resolve(__dirname, 'src/build/webpack-alias/webpack-alias-react.js'),
            "react-dom": path.resolve(__dirname, 'src/build/webpack-alias/webpack-alias-react-dom.js'),
            "react-router": path.resolve(__dirname, 'src/build/webpack-alias/webpack-alias-react-router.js'),
            "react-router-dom": path.resolve(__dirname, 'src/build/webpack-alias/webpack-alias-react-router-dom.js'),
            "highlight.js": path.resolve(__dirname, 'src/build/webpack-alias/webpack-alias-highlight.js'),
        },
    },
};

