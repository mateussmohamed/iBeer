class LoginController {
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
  loginUser(event) {
    return this.auth
      .login(event.user)
      .then(() => {
        this.router.go('home');
      }, (reason) => {
        this.error = reason.message;
      });
  };
}

export default LoginController;
