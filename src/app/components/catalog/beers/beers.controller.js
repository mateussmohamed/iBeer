class BeersController {
  constructor(beerService, cartService) {
    'ngInject';
    this.service = beerService;
    this.cartService = cartService
    this.beers = [];
  }

  $onInit() {
    this.showBeers()
  }

  showBeers() {
    this.service.getBeers().then(res => this.beers = res)
  }

  addToCart({ beer }) {
    this.cartService.add(beer)
  }
}

export default BeersController;
