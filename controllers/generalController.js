const db = require('../models');
const axios = require('axios');

// Defining methods for the booksController
module.exports = {
  getAllPokemon: function (req, res) {
    // console.log(req.session);
    db.User.find({ _id: req.session.user_id })
      .populate('pokemon')
      .then((dbUser) => {
        // console.log(dbUser[0].pokemon[0].name);
        const pokemonarray = dbUser[0].pokemon;
        const dataarray = [];
        // console.log(pokemonarray);
        // return res.json(dbUser)
        // pokemonarray.forEach(data => {
        //   // console.log(data.name)
        //   const name = data.name;
        // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) .then((res) => res.json())
        // .then((DBdata) => {
        //   console.log(DBdata);
        // })
        // })
        Promise.all(
          pokemonarray.map((data) =>
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
              .then((res) => dataarray.push(res.data))
          )
        ).then(() => {
          res.json(dataarray);
        });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  restAllPokemon: function (req, res) {
    db.User.findOneAndUpdate(
      { _id: req.session.user_id },
      { $set: { pokemon: [], pokemon_amount: '0' } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  saveCaughtPokemon: function (req, res) {
    db.Pokemon.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: req.session.user_id },
          { $push: { pokemon: _id } },
          { new: true }
        )
      )
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  increasePokemonAmount: function (req, res) {
    db.User.findOneAndUpdate(
      { _id: req.session.user_id },
      { $set: { pokemon_amount: req.body.pokemon_amount } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //todo: double check is it right?
  //! Check on the Module  (Hash Function )
  //! where to set up the withAuth
  createUser: function (req, res) {
    console.log(req.body);
    db.User.create(req.body)
      .then((userData) => {
        console.log(userData);
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
        });
        res.json(userData);
      })
      .catch((err) => res.status(422).json(err));
  },
  loginUser: function (req, res) {
    db.User.findOne({ email: req.body.email })
      .then((userData) => {
        console.log(userData);
        req.session.save(() => {
          req.session.user_id = userData._id;
          req.session.user_name = userData.username;
          req.session.logged_in = true;
          res.json({ user: userData, message: 'You are now logged in!' });
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  logoutUser: function (req, res) {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
  updatePassword: function (req, res) {
    db.User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { password: req.body.password } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getUsername: function (req, res) {
    if (req.session.logged_in) {
      res.json(req.session.user_name);
    } else {
      res.status(404).end();
    }
  },
  getUserinfo: function (req, res) {
<<<<<<< HEAD
    db.User.findOne({ _id: req.session.user_id })
      .then((UserData) => res.json(UserData))
      .catch((err) => res.status(422).json(err));
  },
=======
    db.User
      .findOne({ _id: req.session.user_id })
      .then(UserData => res.json(UserData))
      .catch(err => res.status(422).json(err));
  },
  getOnlineUsers: function (req, res) {
    db.User
    .find({online: true}, (err, found) => {
      if (err) {
        console.log(err);
        throw(err)
      }
      else {
        res.json(found)
      }
    })
  }
>>>>>>> 3a970785a32e688021f7a72135257c678e17425a
};

// create: function(req, res) {
//   db.Book
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
// update: function(req, res) {
//   db.Book
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// }
// createUser: async function(req, res) {
//   console.log(req.body);
//   const userData = await db.User
//     .create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password
//     })
//     res.json(userData);
//     // .then(userData => {
//     //   console.log(userData);
//     //   // req.session.save(() => {
//     //   //   req.session.user_id = userData.id;
//     //   //   req.session.logged_in = true;

//     //   // })
//     //   res.json(userData);
//     // })
//     // .then(()=>{
//     //   res.json(userData);
//     // })
//     // .catch(err => res.status(422).json(err));
// },
