class FormController {
  constructor() {
    this.user = {};
  }

  $onChanges(changes) {
    if (changes.user) {
      this.user = angular.copy(this.user);
    }
  }
  submitForm() {
    this.onSubmit({
      $event: {
        user: this.user
      }
    });
  }
}

export default FormController;
