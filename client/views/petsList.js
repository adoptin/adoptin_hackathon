Template.petsList.created = function () {
	this.autorun(function () {
		this.subscription = Meteor.subscribe('allPets');
	}.bind(this));
};

Template.petsList.rendered = function () {
	this.autorun(function () {
    	if (!this.subscription.ready()) {
      		IonLoading.show();
    	} else {
      		IonLoading.hide();
      	}
    }.bind(this));
};
	
Template.petsList.helpers ({
	pets: function() {
		return Pets.find();
	}
});