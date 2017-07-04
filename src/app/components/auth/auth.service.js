import firebase from 'firebase';
class AuthService {
  constructor($firebaseAuth, cfpLoadingBar) {
    'ngInject';
    this.loading = cfpLoadingBar;
    this.auth = $firebaseAuth(firebase.auth());
    this.authData = null;
  }

  login(user) {
    this.loading.start();
    return this.auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(this.storeAuthData);
  }

  register(user) {
    return this.auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(this.storeAuthData);
  }

  logout() {
    this.loading.start();
    return this.auth
      .$signOut()
      .then(this.clearAuthData);
  }

  requireAuthentication() {
    return this.auth.$waitForSignIn().then(this.onSignIn);
  }

  onSignIn = (user) => {
    this.authData = user;
    return this.auth.$requireSignIn();
  }

  clearAuthData = () => {
    this.authData = null;
    this.loading.complete();
  }

  storeAuthData = (response) => {
    this.authData = response;
    this.loading.complete();
    return this.authData;
  }

  isAuthenticated = () => {
    return !!this.authData;
  }

  getUser = () => {
    if (this.authData) {
      return this.authData;
    }
  }
}


export default AuthService;
