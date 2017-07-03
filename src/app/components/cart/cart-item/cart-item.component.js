import template from './cart-item.html';
import controller from './cart-item.controller';

let cartItemComponent = {
  bindings: {
    item: '<',
    onRemoveItem: '&',
    onUpdateQtyItem: '&',
  },
  template,
  controller
};

export default cartItemComponent;
