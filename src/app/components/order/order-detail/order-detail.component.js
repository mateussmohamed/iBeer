import template from './order-detail.html';
import controller from './order-detail.controller';

let orderComponent = {
  bindings: {
    order: '<',
  },
  template,
  controller
};

export default orderComponent;
