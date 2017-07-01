import firebase from 'firebase';

class OrderService {
  constructor($firebaseArray, $state, AuthService) {
    'ngInject';
    this.ref = firebase.database().ref().child("orders");
    this.orders = $firebaseArray(this.ref);
    this.auth = AuthService;
    this.state = $state;
  }

  all() {
    return this.orders;
  }

  save(order) {
    if (this.auth.isAuthenticated()) {
      const uid = this.auth.getUser().uid;
      return this.orders.$add({ uid, ...order });
    } else {
      return Promise.reject(new Error('not auth'));
    }
  }
}

export default OrderService;
