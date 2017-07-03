class BeersController {
  constructor(beerService, CartService) {
    'ngInject';
    this.service = beerService;
    this.CartService = CartService
    this.beers = [];
  }

  $onInit() {
    this.showBeers()
  }

  showBeers() {
    this.service.getBeers().then(res => this.beers = res)
  }

  addToCart({ beer }) {
    this.CartService.add(beer)
  }
}

export default BeersController;
