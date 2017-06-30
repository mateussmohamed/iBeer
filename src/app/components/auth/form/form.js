import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';

const formModule = angular.module('auth.form', [
  uiRouter
])

.component('authForm', formComponent)

.name;

export default formModule;
