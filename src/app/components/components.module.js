import angular from 'angular';
import Auth from './auth/auth';
import Home from './home/home';
import Catalog from './catalog/catalog';
import Cart from './cart/cart';
import Order from './order/order';

const componentModule = angular.module('components', [
  Auth,
  Home,
  Catalog,
  Cart,
  Order
])
.name;

export default componentModule;
