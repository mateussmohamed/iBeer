import template from './beers.html';
import controller from './beers.controller';

let beersComponent = {
  bindings: {
    beers: '<',
  },
  template,
  controller
};

export default beersComponent;
