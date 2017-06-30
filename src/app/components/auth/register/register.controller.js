class RegisterController {
  constructor(AuthService, $state) {
    'ngInject';
    this.auth = AuthService;
    this.state = $state;
    this.user = undefined;
    this.error = undefined;
  }
  $onInit = function () {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    };
  };
  createUse(event) {
    return this.auth
      .register(event.user)
      .then(() => {
        this.state.go('home');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

export default RegisterController;
