import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app/app.component';
import navBarComponent from './navbar/navbar.component';

const commonModule = angular.module('common', [
  uiRouter
])
  .component('app', appComponent)
  .component('navbar', navBarComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('app', {
        redirectTo: 'home',
        url: '',
        data: {
          requiredAuth: true
        },
        component: 'app'
      })
  })
  .name;

export default commonModule;
