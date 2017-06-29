export default class CatalogService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.beers = [];
  }
  getBeers() {
    if (this.beers.length > 0) {
      return Promise.resolve(this.beers);
    }

    return this.$http.get('https://api.punkapi.com/v2/beers')
      .then(response => this.beers = response.data);
  }
}
