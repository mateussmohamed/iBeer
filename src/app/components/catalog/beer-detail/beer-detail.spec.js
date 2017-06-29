import Beer-detailModule from './beer-detail';
import Beer-detailController from './beer-detail.controller';
import Beer-detailComponent from './beer-detail.component';
import Beer-detailTemplate from './beer-detail.html';

describe('Beer-detail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Beer-detailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Beer-detailController();
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
      expect(Beer-detailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Beer-detailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Beer-detailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Beer-detailController);
    });
  });
});
