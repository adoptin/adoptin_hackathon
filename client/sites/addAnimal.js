Template.addAnimal.events({
	"submit form": function(event, template){
		event.preventDefault();
		var newPet = {
			name: event.target.name.value,
			breed: event.target.breed.value,
			image: event.target.image.value,
			location: event.target.location.value
		};
		Meteor.call('pet/add', newPet, function(err, result){
			if (err || result == 0) {
				bootbox.alert('It didn\'t work!');
			} else {
				bootbox.alert('Pet added!', function(){
					FlowRouter.go('/');
				});
			}
		});
		
	}
});