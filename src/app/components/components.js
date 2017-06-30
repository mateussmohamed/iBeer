import angular from 'angular';
import Auth from './auth/auth';
import Home from './home/home';
import Catalog from './catalog/catalog';
import Cart from './cart/cart';

const componentModule = angular.module('app.components', [
  Auth,
  Home,
  Catalog,
  Cart
])
.name;

export default componentModule;
