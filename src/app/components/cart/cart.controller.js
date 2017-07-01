class CartController {
  constructor(cartService) {
    'ngInject';
    this.cart = cartService;
    this.items = [];
    this.total = 0;
  }

  $onInit() {
    this.items = this.cart.getItems();
  }

  $onChanges(changes) {
    // console.log(changes);
  }

  $doCheck() {
    this.showTotalPrice();
  }

  onRemove({ item }) {
    this.cart.remove(item);
  }

  showTotalPrice() {
    this.total = this.cart.getTotalPrice();
  }

  checkout(order){
    //TO;DO
    // ADD ORDER SERVICE
    //this.order.save(order)
    // redirect to home page
    //.then(() => ....)
    //.catch(());
  }
}

export default CartController;
