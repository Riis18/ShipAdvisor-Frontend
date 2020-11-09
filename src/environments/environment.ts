// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/',
  firebaseConfig: {
    apiKey: 'AIzaSyCjkv8OLWOdB54k6652uds-f2q7qZJ237U',
    authDomain: 'shipadvisor-d5b2f.firebaseapp.com',
    databaseURL: 'https://shipadvisor-d5b2f.firebaseio.com',
    projectId: 'shipadvisor-d5b2f',
    storageBucket: 'shipadvisor-d5b2f.appspot.com',
    messagingSenderId: '374214517567',
    appId: '1:374214517567:web:25e23989e556ed0b73e98a',
    measurementId: 'G-Q8GSHWV0Q8'
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
