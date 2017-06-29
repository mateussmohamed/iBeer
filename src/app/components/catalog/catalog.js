import angular from 'angular';
import uiRouter from 'angular-ui-router';
import catalogComponent from './catalog.component';
import beersComponent from './beers/beers.component';
import beerComponent from './beer/beer.component';
import beerDetailComponent from './beer-detail/beer-detail.component';
import beerService from './beer.service';

const catalogModule = angular.module('catalog', [
  uiRouter
])
.service('beerService', beerService)
.component('catalog', catalogComponent)
.component('beers', beersComponent)
.component('beer', beerComponent)
.component('beer-detail', beerDetailComponent)

.name;

export default catalogModule;
