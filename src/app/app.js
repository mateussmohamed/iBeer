import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

const config = {
  apiKey: "AIzaSyAovd-Rj-mnkchaFqq3LdgtP0mwGMaiKIE",
  authDomain: "ibeer-1fc8a.firebaseapp.com",
  databaseURL: "https://ibeer-1fc8a.firebaseio.com",
  projectId: "ibeer-1fc8a",
  storageBucket: "ibeer-1fc8a.appspot.com",
  messagingSenderId: "297350815681"
};

firebase.initializeApp(config);

angular.module('app', [
  uiRouter,
  angularfire,
  Common,
  Components
])
  .config(($locationProvider, $firebaseRefProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    //   const configAuth = () => {
    // 'ngInject';

    // Initialize Firebase


    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        orders: `${config.databaseURL}/orders`
      });


    // }
  })

  .component('app', AppComponent);
