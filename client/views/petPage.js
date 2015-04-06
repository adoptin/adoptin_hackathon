Template.petPage.created = function () {
	this.autorun(function () {
		this.subscription = Meteor.subscribe('petProfile', Router.current().params._id);
	}.bind(this));
};

Template.petPage.rendered = function () {
	this.autorun(function () {
    	if (!this.subscription.ready()) {
      		IonLoading.show();
    	} else {
      		IonLoading.hide();
      	}
    }.bind(this));
};

Template.petPage.helpers({
  pet: function() {
    return Pets.findOne({_id: Router.current().params._id});
  }
});

Template.petPage.events({
	'click [data-action="fake"]': function (event, template) {
		event.preventDefault();
		alert('Yeah!');
	}
});
