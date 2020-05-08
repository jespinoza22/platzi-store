// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyApoWYeYaVaDWSl7H8G4pQTmJHoZrmW6zI',
    authDomain: 'platzi-store-2f7ff.firebaseapp.com',
    databaseURL: 'https://platzi-store-2f7ff.firebaseio.com',
    projectId: 'platzi-store-2f7ff',
    storageBucket: 'platzi-store-2f7ff.appspot.com',
    messagingSenderId: '393281664798',
    appId: '1:393281664798:web:1c6bad0e3a0bafaeccfb0f',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
