Template.overview.helpers({
    pets: function() {
        return Pets.find();
    },

    petsCount: function() {
        return Pets.find().count();
    }
})