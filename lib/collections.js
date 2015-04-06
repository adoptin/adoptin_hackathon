Pets = new Mongo.Collection("pets", {
    transform: function(doc) {
        return new Pet(doc);
    }
});

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

Pets.attachSchema(new SimpleSchema ({
  name: {
    type: String,
    autoform: {
      'label-type':'placeholder',
      placeholder:'Pet name'
    },
    max: 50
  },
  createdAt: {
    type: Date
  }
}));
