AutoForm.hooks({
  'add-pet': {
      onSuccess: function (operation, result, template) {
        IonModal.close();
        IonKeyboard.close();
        Router.go('petPage', {_id: result});
      }
    }
});
