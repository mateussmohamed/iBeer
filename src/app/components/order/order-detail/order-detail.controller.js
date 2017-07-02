class OrderDetailController {
  constructor($state) {
    'ngInject';
    this.router = $state;
  }

  goToOrders(){
    this.router.go('orders');
  }
}

export default OrderDetailController;
