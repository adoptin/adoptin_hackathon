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

FlowRouter.route('/pet/:id', {
    action: function(params) {
        //Session.set('petId', params.id);
        FlowLayout.render('layout-page', {main: 'details', petId: params.id})
    },
    subscriptions: function(params) {
        this.register("pet", Meteor.subscribe("pet", params.id));
    }
});