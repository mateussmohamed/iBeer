import BeerModule from './beer';
import BeerController from './beer.controller';
import BeerComponent from './beer.component';
import BeerTemplate from './beer.html';

describe('Beer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BeerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BeerController();
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
      expect(BeerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BeerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BeerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BeerController);
    });
  });
});
