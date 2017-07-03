class CartService {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  add(item) {
    const existOnCart = this.findItem(item);
    if (existOnCart === undefined) {
      item['quantity'] = 1;
      this.items.push(item);
    }
  }

  remove(item) {
    const existOnCart = this.findItem(item);
    if (existOnCart !== undefined) {
      const index = this.items.indexOf(existOnCart);
      this.items.splice(index, 1);
    }
  }

  updateQtyItem(item, quantity) {
    const _item = this.findItem(item);
    const index = this.items.indexOf(_item);
    _item.quantity = quantity;
    this.items[index] = _item;
  }

  clear() {
    this.items = [];
    this.total = 0;
  }

  checkout() {
    if (this.items.length > 0) {
      const items = this.items.map(item => this.itemForCheckout(item));
      const totalPrice = this.calcTotalPrice(this.items);
      return { items, totalPrice };
    }
  }

  findItem(item) {
    return this.items.filter(current => item.id === current.id)[0]
  }

  getItems() {
    return this.items;
  }

  getTotalItems() {
    return this.items.length;
  }

  getTotalPrice() {
    return this.calcTotalPrice(this.items)
  }

  calcTotalPrice(items) {
    return items.reduce((prev, curr) => (prev + (curr.abv * curr.quantity)), 0);
  }

  itemForCheckout(item) {
    return {
      id: item.id,
      name: item.name,
      price: item.abv,
      quantity:
      item.quantity,
      image_url: item.image_url
    };
  }
}

export default CartService;
