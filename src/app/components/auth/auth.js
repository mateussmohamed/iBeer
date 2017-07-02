import angular from 'angular';
import uiRouter from 'angular-ui-router';

import formComponent from './form/form.component';
import loginComponent from './login/login.component';
import registerComponent from './register/register.component';
import AuthService from './auth.service';

const runAuth = ($transitions, $state, AuthService) => {
  'ngInject';

  $transitions.onStart({
    to: (state) => {
      return !!(state.data && state.data.requiredAuth);
    }
  }, () => {
    return AuthService.requireAuthentication().catch(() => $state.target('auth.login'))
  });

  $transitions.onStart({
    to: 'auth.*'
  }, () => {
    if (AuthService.isAuthenticated()) {
      return $state.target('home');
    }
  });
}

const configAuth = (($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('auth', {
      redirectTo: 'auth.login',
      url: '/auth',
      template: '<div ui-view></div>'
    })
    .state('auth.login', {
      url: '/login',
      component: 'login'
    });

  $stateProvider
    .state('auth.register', {
      url: '/register',
      component: 'register'
    });

  $urlRouterProvider.otherwise('/auth/login');

});


const authModule = angular.module('auth', [
  uiRouter,
])
  .config(configAuth)
  .run(runAuth)
  .component('authForm', formComponent)
  .component('login', loginComponent)
  .component('register', registerComponent)
  .service('AuthService', AuthService)

  .name;

export default authModule;
