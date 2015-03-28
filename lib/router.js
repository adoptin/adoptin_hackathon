FlowRouter.route('/', {
  action: function(params) {
    FlowLayout.render('overview', {});
  }
});

FlowRouter.route('/add', {
    action: function() {
        FlowLayout.render('addAnimal', {});
    }
});