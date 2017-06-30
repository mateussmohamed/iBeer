import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [
  uiRouter
])

.component('register', registerComponent)

.name;

export default registerModule;
