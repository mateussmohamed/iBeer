class CartItemController {
  constructor() {
  }

  removeItem() {
    this.onRemoveItem({
      $event: {
        item: this.item
      }
    })
  }
}

export default CartItemController;
