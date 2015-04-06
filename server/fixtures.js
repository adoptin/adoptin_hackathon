
Meteor.startup(function() {

  if (Pets.find().count() === 0) {

    Pets.insert({
    name: "Rantanplan",
    breed: "Dackel",
    location: "80636",
    petImage:"dog1.jpg",
    petType:"dog",
    owner: 0
});

Pets.insert({
    name: "Betty",
    breed: "German Shepard",
    location: "80636",
    petImage:"dog2.jpg",
    petType:"dog",
    owner: 0
});

Pets.insert({
    name: "Bingo",
    breed: "Coyote",
    location: "80636",
    petImage:"dog3.jpg",
    petType:"dog",
    owner: 0
});

Pets.insert({
    name: "Lassie",
    breed: "Collie",
    location: "90636",
    petImage:"dog4.jpg",
    petType:"dog",
    owner: 0
});

Pets.insert({
    name: "Chango",
    breed: "Bull terrier",
    tags: "bad-ass",
    location: "97115",
    owner: 'Enrique',
    petImage:"pictures/dog5.jpg",
    petType:"dog"
});

Pets.insert({
    name: "Gato",
    breed: "Garfield",
    tags: "playful",
    location: "97115",
    owner: 'Fany',
    petImage:"gato1.jpg",
    petType:"cat"
});

  }

});
