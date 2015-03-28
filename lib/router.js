FlowRouter.route('/', {
  action: function(params) {
    FlowLayout.render('layout-page', {main: "overview"});
  },
  subscriptions: function() {
    this.register("pets", Meteor.subscribe("pets"));
  }
});

FlowRouter.route('/add', {
    action: function() {
        FlowLayout.render('layout-page', {main: "addAnimal"});
    }
});
