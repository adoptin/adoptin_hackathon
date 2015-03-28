Meteor.publish("pets", function() {
    return Pets.find();
})

Meteor.publish("pet", function(id) {
    return Pets.find({ _id: id });
})