module.exports = {
    mode: 'development',
    entry: {
        app: ['src/app/main.ts'],
    },
    module: {
        rules: {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
};
