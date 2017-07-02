class OrderListController {
  constructor($state, OrderService) {
    'ngInject';
    this.service = OrderService;
    this.router = $state;
  }

  $onInit(){
    this.orders = this.service.all();
  }

  goToDetailOrder(order){
    this.router.go('order', {
      id: order.$id
    });
  }
}

export default OrderListController;
