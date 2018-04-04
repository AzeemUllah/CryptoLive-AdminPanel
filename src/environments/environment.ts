// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBiEM5xqXO1TKswn0lqnzmlGDBAiQzmFsQ",
    authDomain: "crypto-admin.firebaseapp.com",
    databaseURL: "https://crypto-admin.firebaseio.com",
    projectId: "crypto-admin",
    storageBucket: "crypto-admin.appspot.com",
    messagingSenderId: "300599031277"
  }
};
