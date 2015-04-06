Meteor.publish('allPets', function() {
  return Pets.find();
});

Meteor.publish('petProfile', function(_id) {
	return Pets.find({_id: _id});
});

Meteor.publish('newPets', function(limit) {
  return Pets.find({}, {sort: {submitted: -1}, limit: limit});
});


// Publication for the user to see his or her published pets
Meteor.publish('myPublishedPets', function(author){
	return Pets.find({author: author});
});
