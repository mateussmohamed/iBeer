import OrderListController from './order-list.controller';
import OrderListComponent from './order-list.component';
import OrderListTemplate from './order-list.html';

describe('OrderList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderListController();
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
      expect(OrderListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OrderListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrderListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrderListController);
    });
  });
});
