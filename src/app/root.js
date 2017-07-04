import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';
import angularLoadingBar from 'angular-loading-bar';
import commom from './common/common.module';
import components from './components/components.module';
import rootComponent from './root.component';

import './root.scss';

const config = {
  apiKey: "AIzaSyAovd-Rj-mnkchaFqq3LdgtP0mwGMaiKIE",
  authDomain: "ibeer-1fc8a.firebaseapp.com",
  databaseURL: "https://ibeer-1fc8a.firebaseio.com",
  projectId: "ibeer-1fc8a",
  storageBucket: "ibeer-1fc8a.appspot.com",
  messagingSenderId: "297350815681"
};

firebase.initializeApp(config);

angular.module('root', [
  uiRouter,
  angularfire,
  angularLoadingBar,
  commom,
  components
])
  .component('root', rootComponent)
  .config(($locationProvider, $firebaseRefProvider, cfpLoadingBarProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        orders: `${config.databaseURL}/orders`
      });
  });
