import OrderDetailModule from './order';
import OrderDetailController from './order-detail.controller';
import OrderDetailComponent from './order-detail.component';
import OrderDetailTemplate from './order-detail.html';

describe('OrderDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderDetailController();
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
      expect(OrderDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OrderDetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrderDetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrderDetailController);
    });
  });
});
