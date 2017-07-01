class CartController {
  constructor($state, cartService, orderService) {
    'ngInject';
    this.cart = cartService;
    this.order = orderService;
    this.state = $state;
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
    // console.log(this.items);
    if (this.items.length === 0) {
      this.items = this.cart.getItems();
      this.showTotalPrice();
    }
  }

  onRemove({ item }) {
    this.cart.remove(item);
  }

  clearCart() {
    this.cart.clear();
    this.items = [];
  }

  onCheckout() {
    const order = this.cart.checkout();
    this.order.save(order)
      .then((res) => {
        this.clearCart();
        this.state.go('home');
      })
      .catch((ex) => {
        this.state.go('auth.login');
      });

  }

  showTotalPrice() {
    this.total = this.cart.getTotalPrice();
  }
}

export default CartController;
