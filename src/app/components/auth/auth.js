import angular from 'angular';
import uiRouter from 'angular-ui-router';

import formComponent from './form/form';
import loginComponent from './login/login';
import registerComponent from './register/register';
import AuthService from './auth.service';

const runAuth = ($transitions, $state, AuthService) => {
  'ngInject';
  $transitions.onStart({
    to: (state) => {
      console.log(state);
      return !!(state.data && state.data.requiredAuth);
    }
  }, () => {
    console.log(AuthService.requireAuthentication())
    // AuthService.requireAuthentication().catch(() => {
    //   $state.target('login');
    // })
    return AuthService.requireAuthentication().catch(() => $state.target('auth.login'))
  });

  $transitions.onStart({
    to: 'auth.*'
  }, () => {
    console.log(AuthService.isAuthenticated());
    if (AuthService.isAuthenticated()) {
      alert();
      return $state.target('orders');
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
