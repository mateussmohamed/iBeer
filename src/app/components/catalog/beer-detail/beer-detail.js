import angular from 'angular';
import uiRouter from 'angular-ui-router';
import beerDetailComponent from './beer-detail.component';

let beerDetailModule = angular.module('beer-detail', [
  uiRouter
])

.component('beerDetail', beerDetailComponent)

.name;

export default beerDetailModule;
