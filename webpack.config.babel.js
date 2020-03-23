import path from 'path';
import WebpackUserscript from 'webpack-userscript';

const dev = process.env.NODE_ENV === 'development';

export default {
    devServer: {
        contentBase: path.resolve(__dirname),
        publicPath: 'http://localhost:8080/',
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
    entry: path.join(__dirname, 'src', 'index.js'),
    mode: dev ? 'development' : 'production',
    optimization: {
        minimize: false,
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'fruitloops.js',
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                name: `Fruit Loops${dev ? ' (dev)' : ''}`,
                version: `[version]${dev ? '-build.[buildNo]' : ''}`,
                description: 'Automates PIPS',
                contributor: 'JSON',
                downloadURL: dev ? '' : 'https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.user.js',
                updateURL: dev ? '' : 'https://raw.githubusercontent.com/Sir-Chasington/fruit-loops/master/fruitloops.meta.js',
                match: [
                    'https://fruitlab.com/',
                    'https://fruitlab.com/ggm',
                    'https://fruitlab.com/video/*',
                ],
                grant: [
                    'GM_setValue',
                    'GM_getValue',
                    'GM_notification',
                    'window.focus',
                ],
                'run-at': 'document-start',
                noframes: true,
            },
            metajs: true,
            pretty: true,
        }),
    ],
};
