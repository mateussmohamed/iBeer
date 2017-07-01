import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderComponent from './order.component';

let orderModule = angular.module('order', [
  uiRouter
])

.component('order', orderComponent)

.name;

export default orderModule;
