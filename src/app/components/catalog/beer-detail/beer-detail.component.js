import template from './beer-detail.html';
import controller from './beer-detail.controller';

let beerDetailComponent = {
  bindings: {
    beer: '<',
    // onShowDetail: '&'
  },
  template,
  controller
};

export default beerDetailComponent;
