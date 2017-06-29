class BeerController {
  constructor() {
  }

  addToCart() {
    this.onAddToCart({
      $event: {
        beer: this.beer
      }
    })
  }
}

export default BeerController;
