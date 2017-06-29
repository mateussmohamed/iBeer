import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cartComponent from './cart.component';
import cartItemComponent from './cart-item/cart-item.component';
import cartService from './cart.service';

const cartModule = angular.module('cart', [
  uiRouter
])
.service('cartService', cartService)
.component('cartItem', cartItemComponent)
.component('cart', cartComponent)

.name;

export default cartModule;
