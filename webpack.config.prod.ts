import webpackConfig from './webpack.config';
import { Configuration } from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://127.0.0.1:81/', // production server,
    uniqueName: 'epfnewpwd',
  },
};

export default prodWebpackConfig;
