import template from './cart.html';
import controller from './cart.controller';

const cartComponent = {
  bindings: {
    items: '<',
    total: '<',
  },
  template,
  controller
};

export default cartComponent;
