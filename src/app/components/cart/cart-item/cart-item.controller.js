class CartItemController {
  constructor() {
  }

  removeItem() {
    console.log('call removeItem');
    this.onRemoveItem({
      $event: {
        item: this.item
      }
    })
  }
}

export default CartItemController;
