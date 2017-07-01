import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ordersComponent from './orders.component';

let ordersModule = angular.module('orders', [
  uiRouter
])

.component('orders', ordersComponent)

.name;

export default ordersModule;
