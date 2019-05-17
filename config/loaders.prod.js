/**
 * @file loaders.prod
 * @author lzheng
 */
var config = require('./PATHS')

module.exports = [
    // .js, .jsx
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
            config.src
        ],
        // happy: {id: 'js'},
        query: {
            cacheDirectory: true,
            presets: [
                require.resolve('babel-preset-es2015-ie'),
                require.resolve('babel-preset-react'),
                require.resolve('babel-preset-stage-0')
            ],
            plugins: [
                require.resolve('react-hot-loader/babel'),
                require.resolve('babel-plugin-transform-decorators-legacy'),
                [require.resolve('babel-plugin-danger-remove-unused-import'), {
                    ignore: ['react'],
                    verbose: false
                }],
            ]
        }
    },
    {
        test: /\.css$/,
        exclude: [
            /\.mod\.css$/,
            /\.use(able)?\.css$/,
        ],
        loaders: [
            'style-loader',
            'css-loader?localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
        ],
    },

    {
        test: /\.use(able)?\.css$/,
        happy: {id: 'useable-css'},
        loaders: [
            'style-loader/useable',
            'css-loader?localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
        ],
    },

    {
        test: /\.mod\.css$/,
        loaders: [
            'style-loader',
            'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
        ],
    },
    {
        test: /\.less$/,
        exclude: [
            /\.mod\.less$/,
            /\.use(able)?\.less$/,
        ],
        loaders: [
            'style-loader',
            'css-loader?localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
            'less-loader'
        ],
    },

    {
        test: /\.use(able)?\.less$/,
        happy: {id: 'useable-less'},
        loaders: [
            'style-loader/useable',
            'css-loader?localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
            'less-loader',
            require.resolve('./loaders/less-reference-import-loader')
        ],
    },

    {
        test: /\.mod\.less$/,
        loaders: [
            'style-loader',
            'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version&remove=false',
            'less-loader'
        ],
    },

    // 其他资源
    {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=10240'
    },
    {
        test: /\.(html|md)$/,
        loader: 'html-loader',
        query: {
            minimize: false
        }
    },
    {
        test: /\.json$/, loader: 'json-loader'
    },
    {
        test: /\.woff(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.woff2(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.ttf(\?.+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
        test: /\.eot(\?.+)?$/, loader: 'file'
    },
    {
        test: /\.svg(\?.+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
    },
    {
        test: /\.tag$/,
        loaders: ['babel-loader', 'befe-riotjs-loader']
    }
]
