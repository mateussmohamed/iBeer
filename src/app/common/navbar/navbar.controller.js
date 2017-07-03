class NavbarController {
  constructor($state) {
    'ngInject';
    this.router = $state;
    this.toggle = false;
  }

  toggleNav() {
    this.toggle = !this.toggle;
  }

  goTo(event, state) {
    event.preventDefault();
    this.router.go(state);
    this.toggle = false;
  }
}

export default NavbarController;
