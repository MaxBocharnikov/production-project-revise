import webpack from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ["i18next-extract", {"nsSeparator": "~"}]
                ]
            }
        }
    }

    const tsLoader = {
            test: /\.tsx?$/,
            use: [{
                loader: require.resolve('ts-loader'),
                options: {
                    getCustomTransformers: () => ({
                        before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    //transpileOnly: options.isDev,
                },
            }],
            exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const sass = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev
                    ? "style-loader"
                    : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                            auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module')))

                        },
                    }
                },
                "sass-loader",
            ],
    };
    return [
        babelLoader,
        tsLoader,
        svgLoader,
        fileLoader,
        sass
    ]
}