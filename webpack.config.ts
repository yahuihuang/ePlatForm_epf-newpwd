import { Configuration, container } from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'http://127.0.0.1:4201/',
    uniqueName: 'orders',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'orders',
      library: { type: 'var', name: 'orders' },
      filename: 'remoteOrders.js',
      exposes: {
        OrderModule: './src/app/order/order.module.ts',
        OrderComponent: './src/app/order/order.component.ts'
      },
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/common"]
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: dep.dependencies["@angular/router"]
        }
      }
    })
  ]
};

export default webpackConfig;
