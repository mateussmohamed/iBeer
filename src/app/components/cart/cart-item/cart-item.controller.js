class CartItemController {
  constructor() {
    this.qtys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.quantity = 1;
  }

  removeItem() {
    this.onRemoveItem({
      $event: {
        item: this.item
      }
    })
  }
  updateQty() {
    this.onUpdateQtyItem({
      $event: {
        item: this.item,
        quantity: this.quantity
      }
    });
  }
}

export default CartItemController;
