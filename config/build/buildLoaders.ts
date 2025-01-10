import webpack from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    };
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
        tsLoader,
        sass
    ]
}