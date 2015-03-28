Template.addAnimal.events({
	"submit form": function(event, template){
		Meteor.call('pet/add',{
			name: event.target.name.value,
			breed: event.target.breed.value,
			image: event.target.image.value,
			location: event.target.location.value,
		});
	}
});