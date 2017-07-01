class RegisterController {
  constructor(AuthService, $state) {
    'ngInject';
    this.auth = AuthService;
    this.state = $state;
    this.user = undefined;
    this.error = undefined;
  }

  $onInit() {
    this.error = null;
    this.user = {
      email: '',
      password: ''
    };
  };
  createUser(event) {
    return this.auth.register(event.user)
      .then(() => {
        this.state.go('home');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

export default RegisterController;
