import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cartItemComponent from './cart-item.component';

let cartItemModule = angular.module('cartItem', [
  uiRouter
])

.component('cartItem', cartItemComponent)

.name;

export default cartItemModule;
