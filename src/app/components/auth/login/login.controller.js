class LoginController {
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
  loginUser(event) {
    return this.auth
      .login(event.user)
      .then(() => {
        this.state.go('home');
      }, (reason) => {
        console.log(reason);
        this.error = reason.message;
      });
  };
}

export default LoginController;
