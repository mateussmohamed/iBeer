class RegisterController {
  constructor(AuthService, $state) {
    'ngInject';
    this.auth = AuthService;
    this.router = $state;
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
        this.router.go('home');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

export default RegisterController;
