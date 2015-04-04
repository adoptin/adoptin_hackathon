Meteor.publish('allpets', function() {
  return Pets.find();
});

Meteor.publish('pet', function(_id) {
	return Pets.find({_id: _id});
});