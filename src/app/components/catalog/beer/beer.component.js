import template from './beer.html';
import controller from './beer.controller';

let beerComponent = {
  bindings: {
    beer: '<',
    onAddToCart: '&'
  },
  template,
  controller
};

export default beerComponent;
