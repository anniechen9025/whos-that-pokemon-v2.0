const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pokemongame"
);

const pokemonSeed = [{
  name: "Bulbasaur",
  date: new Date(Date.now())
},
{
  name: "Ivysaur",
  date: new Date(Date.now())
},
{
  name: "Venusaur",
  date: new Date(Date.now())
}];

const userSeed = [{
  username: "anniechen9025",
  email: "anniechen9025@gmail.com",
  password: "annie9025",
  pokemon_amount: "5",
  online: false
},
{
  username: "lihua",
  email: "lihua.anderson@gmail.com",
  password: "12345678",
  pokemon_amount: "200",
  online: false
},
{
  username: "christine",
  email: "ctine.ngyn@gmail.com",
  password: "12345678",
  pokemon_amount: "100",
  online: false
},
{
  username: "daniel",
  email: "dannyphan@comcast.net",
  password: "12345678",
  pokemon_amount: "1000",
  online: false
}];

const generationSeed = [
  // {
  //   name: "mew",
  //   type: "idk",
  //   pk_id: "01",
  //   weight: "50",
  //   height: "50"
  // },
  // {
  //   name: "snorlax",
  //   type: "idk",
  //   pk_id: "02",
  //   weight: "1000",
  //   height: "100"
  // },
  // {
  //   name: "pikachu",
  //   type: "eletric",
  //   pk_id: "03",
  //   weight: "10",
  //   height: "10"
  // }
];

db.Pokemon
  .remove({})
  .then(() => db.Pokemon.collection.insertMany(pokemonSeed))
  .then(data => {
    console.log(data.result.n + " pokemon records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Generation
  .remove({})
  .then(() => db.Generation.collection.insertMany(generationSeed))
  .then(data => {
    console.log(data.result.n + " generation pokedex inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


