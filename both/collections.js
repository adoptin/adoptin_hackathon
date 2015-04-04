Pets = new Mongo.Collection("pets", {
    transform: function(doc) {
        return new Pet(doc);
    }
});

/*

Pet = function(doc) {
    _.extend(this, doc);
}


Pet.prototype = {
    nameInUpperCase: function () {
        return this.name.toUpperCase();
    },

    rename: function (newName) {
        Meteor.call('pet/rename', this._id, newName)
    }
}

*/