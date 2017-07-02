class AppController {
  constructor(AuthService, $state) {
    'ngInject';
    this.auth = AuthService;
    this.user = this.auth.getUser();
    this.state = $state;
  }

  logout() {
    this.auth.logout().then(() => {
      this.state.go('auth.login');
    });
  };

}

export default AppController;
