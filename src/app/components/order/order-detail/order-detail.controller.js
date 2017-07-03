class OrderDetailController {
  constructor($state) {
    'ngInject';
    this.route = $state;
  }
  goToOrders() {
    this.route.go('orders');
  }
}

export default OrderDetailController;
