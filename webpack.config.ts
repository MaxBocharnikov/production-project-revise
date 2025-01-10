import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildMode, BuildOptions, BuildPaths} from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration  => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';

    const PORT =  env.port || 3000;

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT
    }
    return buildWebpackConfig(options)
}