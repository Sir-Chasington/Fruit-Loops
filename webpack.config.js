const path = require('path');
const WebpackUserscript = require('webpack-userscript');

const dev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'fruitloops.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        publicPath: 'https://localhost:8080/',
        hot: false,
        liveReload: true,
        port: 8080,
        disableHostCheck: true,
        https: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        useLocalIp: false,
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                name: dev ? 'Fruit Loops (dev)' : 'Fruit Loops',
                // eslint-disable-next-line quotes
                version: dev ? '[version]-build.[buildNo]' : '[version]',
                description: 'Automates PIPS',
                contributor: 'JSON',
                downloadURL: dev ? '' : 'https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.user.js',
                updateURL: dev ? '' : 'https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.meta.js',
                match: 'https://fruitlab.com/*',
                grant: ['GM_setValue', 'GM_getValue', 'GM_notification', 'window.focus'],
                'run-at': 'document-start',
                noframes: true,
            },
            metajs: true,
            pretty: false,
        }),
    ],
};
