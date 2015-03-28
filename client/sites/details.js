Template.details.helpers({
    'pet': function() {
        var petId = this.petId();

        // Check Template.onCreate
        var pet = Pets.findOne(petId);
        return pet;
    }
});