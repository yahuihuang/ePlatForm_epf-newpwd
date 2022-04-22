import webpackConfig from './webpack.config';
import { Configuration } from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'http://testepf.test.com.tw:81/', // production server,
    uniqueName: 'epfnewpwd',
  },
};

export default prodWebpackConfig;
