FlowRouter.route('/', {
  action: function(params) {
    FlowLayout.render('overview', {});
  },
  subscriptions: function() {
    this.register("pets", Meteor.subscribe("pets"));
  }
});

FlowRouter.route('/add', {
    action: function() {
        FlowLayout.render('addAnimal', {});
    }
});
