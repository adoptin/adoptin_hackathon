Meteor.startup(function() {

  if (Pets.find().count() === 0) {

    Pets.insert({
    name: "Rantanplan",
    breed: "Dackel",
    location: "80636",
    owner: 0
});

Pets.insert({
    name: "Betty",
    breed: "German Shepard",
    location: "80636",
    owner: 0
});

Pets.insert({
    name: "Bingo",
    breed: "Coyote",
    location: "80636",
    owner: 0
});

Pets.insert({
    name: "Lassie",
    breed: "Collie",
    location: "90636",
    owner: 0
});

  }

});
