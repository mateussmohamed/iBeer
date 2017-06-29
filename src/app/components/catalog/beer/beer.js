import angular from 'angular';
import uiRouter from 'angular-ui-router';
import beerComponent from './beer.component';

let beerModule = angular.module('beer', [
  uiRouter
])

.component('beer', beerComponent)

.name;

export default beerModule;
