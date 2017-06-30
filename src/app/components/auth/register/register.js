import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('auth.register', [
  uiRouter
])

  .component('register', registerComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('auth.register', {
        url: '/register',
        component: 'register'
      });
  })
  .name;

export default registerModule;
