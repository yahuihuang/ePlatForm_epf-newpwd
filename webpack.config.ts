import { Configuration, container } from 'webpack';
import * as webpack from 'webpack';
import dep from 'package.json';

export const webpackConfig: Configuration = {
  output: {
    publicPath: 'https://epf-newpwd.web.app/',
    uniqueName: 'orders',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        remoteEntry_Rootapp: JSON.stringify((process.env['remoteEntry_rootapp'] == undefined) ? "https://epf-rootapp.web.app/remoteRootapp.js" : process.env['remoteEntry_rootapp']),
        remoteEntry_Orders: JSON.stringify((process.env['remoteentry_orders'] == undefined) ? "https://epf-newpwd.web.app/remoteOrders.js" : process.env['remoteentry_orders']),
        remoteEntry_Restaurant: JSON.stringify((process.env['remoteentry_restaurant'] == undefined) ? "https://epf-account.web.app/remoteRestaurant.js" : process.env['remoteentry_restaurant']),
      }
    }),
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
