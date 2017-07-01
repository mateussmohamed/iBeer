import OrderModule from './order';
import OrderController from './order.controller';
import OrderComponent from './order.component';
import OrderTemplate from './order.html';

describe('Order', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderController();
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
      expect(OrderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OrderComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrderTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrderController);
    });
  });
});
