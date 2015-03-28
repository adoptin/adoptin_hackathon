Meteor.methods({
    addPet: function(newPet) {
        Pets.insert(newPet);
    }
})