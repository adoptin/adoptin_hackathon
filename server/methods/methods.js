Meteor.methods({
    addPet: function(newPet) {

        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        newPet.owner = Meteor.userId();

        Pets.insert(newPet);
    }
})