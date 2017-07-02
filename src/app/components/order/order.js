import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderDetailComponent from './order-detail/order-detail.component';
import ordesListComponent from './order-list/order-list.component';
import OrderService from './order.service';

const orderModule = angular.module('order', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('orders', {
        parent: 'app',
        url: '/orders',
        component: 'orderList'
      });

    $stateProvider
      .state('order', {
        parent: 'app',
        url: '/order/:id',
        component: 'orderDetail'
      });
  })
  .service('OrderService', OrderService)
  .component('orderDetail', orderDetailComponent)
  .component('orderList', ordesListComponent)

  .name;

export default orderModule;
