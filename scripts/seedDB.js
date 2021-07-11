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
  pokemon_amount: "5"
},
{
  username: "lihua",
  email: "lihua.anderson@gmail.com",
  password: "123456",
  pokemon_amount: "200"
},
{
  username: "christine",
  email: "ctine.ngyn@gmail.com",
  password: "123456",
  pokemon_amount: "100"
},
{
  username: "daniel",
  email: "dannyphan@comcast.net",
  password: "123456",
  pokemon_amount: "1000"
}];

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

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " pokemon records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
