import { $qs, $on, $rmc } from '../../../utils/helpers';

class BeerDetailController {
  constructor() {
    this.toggle = false;
  }

  toggleDetail() {
    this.toggle = !this.toggle;
  }
}

export default BeerDetailController;
