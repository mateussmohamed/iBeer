export default class CartService {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  add(item) {
    const _item = this.findItem(item);
    if (_item) {
      _item.quantity += 1;
      const index = this.items.indexOf(item);
      this.items[index] = _item;

    } else {
      // new item
      item['quantity'] = 1;
      this.items.push(item);
    }
  }

  remove(item) {
    const _item = this.findItem(item);
    if (_item) {
      const index = this.items.indexOf(_item);
      if (_item.quantity > 1) {
        _item['quantity']--;
        this.items[index] = _item;
      } else {
        this.items.splice(index, 1);
      }
    }
  }

  checkout() {
    if (this.items.length > 0) {
      return {
        items: this.items,
        totalPrice: this.calcTotalPrice(this.items)
      }
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
}
