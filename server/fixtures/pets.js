Meteor.startup(function () {


    if (Pets.find().count() === 0) {
        Pets.insert({
            name: "Rantanplan",
            image: "/images/pets/default.jpg",
            breed: "Dackel",
            location: "80636",
            owner: 0
        });

        Pets.insert({
            name: "Betty",
            image: "/images/pets/default.jpg",
            breed: "German Shepard",
            location: "80636",
            owner: 0
        });

        Pets.insert({
            name: "Bingo",
            image: "/images/pets/default.jpg",
            breed: "Coyote",
            location: "80636",
            owner: 0
        });

        Pets.insert({
            name: "Lassie",
            image: "/images/pets/default.jpg",
            breed: "Collie",
            location: "90636",
            owner: 0
        });
    }
});