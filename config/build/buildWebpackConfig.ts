import webpack from 'webpack';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildDevServer} from './buildDevServer';
import {BuildOptions} from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true
        },
        devtool: options.isDev ? 'inline-source-map' : undefined,
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devServer: buildDevServer(options),
    };

}