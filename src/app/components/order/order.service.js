import firebase from 'firebase';

class OrderService {
  constructor($firebaseArray, AuthService) {
    'ngInject';
    // this.auth = AuthService;
    this.array = $firebaseArray;
    this.ref = firebase.database().ref().child("orders");
    this.uid = AuthService.getUser().uid;
    // this.orders = $firebaseArray(this.ref);
  }

  all() {
    return this.array(this.ref.child(this.uid));
  }

  save(data) {
    const order = { uid: this.uid, requestDate: Date.now(), ...data };
    return this.array(this.ref.child(this.uid)).$add(order);
  }
}

export default OrderService;
