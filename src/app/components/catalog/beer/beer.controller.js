class BeerController {
  constructor(){
    this.toggleDetail = false;
  }
  addToCart() {
    this.onAddToCart({
      $event: {
        beer: this.beer
      }
    });
  }
}

export default BeerController;
