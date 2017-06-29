import CartItemModule from './item';
import CartItemController from './cart-item.controller';
import CartItemComponent from './cart-item.component';
import CartItemTemplate from './cart-item.html';

describe('CartItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CartItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CartItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CartItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CartItemComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CartItemTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CartItemController);
    });
  });
});
