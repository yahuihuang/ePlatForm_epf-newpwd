import { Env } from "../typing";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare var $ENV: Env;

export const environment = {
  production: false,
  publicPath: $ENV.publicPath,
  remoteEntry_Rootapp: $ENV.remoteEntry_Rootapp,
  remoteEntry_Orders: $ENV.remoteEntry_Orders,
  remoteEntry_Restaurant: $ENV.remoteEntry_Restaurant,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
