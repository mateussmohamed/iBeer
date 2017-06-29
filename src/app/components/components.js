import angular from 'angular';
import Home from './home/home';
// import About from './about/about';
import Catalog from './catalog/catalog';
import Cart from './cart/cart';

let componentModule = angular.module('app.components', [
  Home,
  Catalog,
  Cart
])

.name;

export default componentModule;
