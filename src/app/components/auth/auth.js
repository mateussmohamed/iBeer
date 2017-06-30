import angular from 'angular';
import uiRouter from 'angular-ui-router';

import formComponent from './form/form';
import loginComponent from './login/login';
import registerComponent from './register/register';
import AuthService from './auth.service';

const runAuth = ($transitions, $state, AuthService) => {
  'ngInject';
  console.log('runAuth');
  $transitions.onStart({
    to: (state) => {
      console.log(state);
      console.log('$transitions.onStart');
      console.log(!!(state.data && state.data.requiredAuth));
      return !!(state.data && state.data.requiredAuth);
    }
  }, () => {
    console.log('aaa')
    AuthService.requireAuthentication().catch(() => {
      console.log('catch');
      $state.target('login');
    })
    return AuthService.requireAuthentication().catch(() => $state.target('login'))
  });

  $transitions.onStart({
    to: 'auth.*'
  }, () => {
    if (AuthService.isAuthenticated()) {
      return $state.target('home');
    }
  });
}

const authModule = angular.module('auth', [
  uiRouter,
  formComponent,
  loginComponent,
  registerComponent
])
  .run(runAuth)
  // .component('form', formComponent)
  // .component('login', loginComponent)
  // .component('register', registerComponent)
  .service('AuthService', AuthService)
  .name;

export default authModule;
