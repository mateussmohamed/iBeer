import template from './form.html';
import controller from './form.controller';

let formComponent = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: '&'
  },
  template,
  controller
};

export default formComponent;
