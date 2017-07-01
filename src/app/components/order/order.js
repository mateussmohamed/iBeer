import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderComponent from './order.component';
import orderService from './order.service';

const orderModule = angular.module('order', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('order', {
        url: '/orders',
        component: 'order'
      })
  })
  .service('orderService', orderService)
  .component('order', orderComponent)

  .name;

export default orderModule;
