class AppController {
  constructor(AuthService, $state) {
    'ngInject';
    this.auth = AuthService;
    this.user = this.auth.getUser();
    this.router = $state;
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.go('auth.login');
    });
  };

}

export default AppController;
