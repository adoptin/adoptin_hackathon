Template.pets.created = function () {
	this.autorun(function () {
		this.subscription = Meteor.suscribe('allpets');
	}.bind(this));
};

Template.pets.rendered = function () {
	this.autorun(function () {
    	if (!this.subscription.ready()) {
      		IonLoading.show();
    	} else {
      		IonLoading.hide();
      	}
    }.bind(this));
};
	
Template.pets.helpers ({
	petsd: function() {
		return Pets.find();
	}
});