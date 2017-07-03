import { $adc, $rmc, $qs } from '../../utils/helpers';
class CartController {
  constructor($state, CartService, OrderService) {
    'ngInject';
    this.cart = CartService;
    this.order = OrderService;
    this.router = $state;
    this.items = [];
    this.total = 0;
    this.toggleCart = false;
    this.$body = $qs('body');
  }

  $doCheck() {
    this.items = this.cart.getItems();
    this.showTotalPrice();
  }

  onToggleCart() {
    this.toggleCart = !this.toggleCart;
    if (this.toggleCart) {
      $adc('overflow-hidden', this.$body);
    } else {
      $rmc('overflow-hidden', this.$body);
    }
  }

  onRemove({ item }) {
    this.cart.remove(item);
  }

  onUpdateQtyItem({ item, quantity }) {
    // console.log(data);
    this.cart.updateQtyItem(item, quantity);
  }

  clearCart() {
    this.cart.clear();
  }

  onCheckout() {
    if (this.items.length === 0) {
      this.toggleCart = false;
      $rmc('overflow-hidden', this.$body);
      return;
    }
    const order = this.cart.checkout();
    this.order.save(order)
      .then((res) => {
        this.clearCart();
        this.toggleCart = false;
        $rmc('overflow-hidden', this.$body);
        this.router.go('order', { id: res.key });
      })

  }

  showTotalPrice() {
    this.total = this.cart.getTotalPrice();
  }
}

export default CartController;
