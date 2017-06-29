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
}

export default CartController;
