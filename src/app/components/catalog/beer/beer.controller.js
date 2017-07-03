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

  onToggleDetail($event) {
    console.log($event);
    // this.toggleDetail = !this.toggleDetail;
    // this.onToggleDetail();
  }
}

export default BeerController;
