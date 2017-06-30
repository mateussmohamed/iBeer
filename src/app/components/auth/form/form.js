import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formComponent from './form.component';

let formModule = angular.module('form', [
  uiRouter
])

.component('form', formComponent)

.name;

export default formModule;
