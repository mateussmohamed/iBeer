import angular from 'angular';
import uiRouter from 'angular-ui-router';
import beersComponent from './beers.component';

let beersModule = angular.module('beers', [
  uiRouter
])

.component('beers', beersComponent)

.name;

export default beersModule;
