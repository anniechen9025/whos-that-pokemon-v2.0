const db = require("../models");

// Defining methods for the booksController
module.exports = {
  getAllPokemon: function (req, res) {
    console.log(req.session);
    db.User
      .find({_id: req.session.user_id})
      .populate("pokemon")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  restAllPokemon: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.session.user_id },{$set:{"pokemon":[]}})
      // .then(dbModel => dbModel[0].pokemon.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveCaughtPokemon: function (req, res) {
    db.Pokemon.create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({ _id: req.session.user_id }, { $push: { pokemon: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  //todo: double check is it right?
  //! Check on the Module  (Hash Function )
  //! where to set up the withAuth
  createUser: function (req, res) {
    console.log(req.body);
    db.User
      .create(req.body)
      .then(userData => {
        console.log(userData);
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;

        })
        res.json(userData);
      })
      .catch(err => res.status(422).json(err));
  },
  loginUser: function (req, res) {
    console.log(req.body);
    db.User
      .findOne({email:req.body.email})
      .then(userData => {
        console.log(userData);
        req.session.save(() => {
          req.session.user_id = userData._id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
      })
      .catch(err => res.status(422).json(err));
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
    db.User
      .findOneAndUpdate({ _id: req.session.user_id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
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
