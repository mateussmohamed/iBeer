import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
  bindings: {
    onLogout: '&'
  },
  template,
  controller
};

export default navbarComponent;
