const merge = require('webpack-merge');
const defaultConfig = require('@ionic/app-scripts/config/webpack.config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devConfig = merge(defaultConfig.dev, {
    // entry: {
    //     app: ['src/app/main.ts'],
    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/,
            //     options: {
            //         appendTsSuffixTo: [/\.vue$/],
            //     },
            // },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.ts', '.vue', '.json'],
    },
    plugins: [new VueLoaderPlugin()],
});

console.log('Using custom webpack configuration...');
// console.log(devConfig);

module.exports = {
    dev: devConfig,
    prod: devConfig,
};
