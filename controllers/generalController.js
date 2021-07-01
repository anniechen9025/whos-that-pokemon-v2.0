const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //todo: want to get the pokemon under one's user_id
  getAllPokemon: function (req, res) {
    db.User
      .find({ _id: req.session.user_id })
      .populate("pokemon")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  restAllPokemon: function (req, res) {
    db.Pokemon
      .find({})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveCaughtPokemon: function (req, res) {
    db.Pokemon.create(body)
      .then(({ _id }) => db.User.findOneAndUpdate({ _id: req.session.user_id }, { $push: { pokemon: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  //todo: double check is it right?
  createUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => {
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.json(dbModel);
        });
      })
      .catch(err => res.status(422).json(err));
  },
  loginUser: function(req, res) {
    db.User
      .findOne(req.body.name)
      .then(dbModel => {
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.json({ user: userData, message: 'You are now logged in!' });
        });
        // res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  logoutUser: function(req, res) {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
  updatePassword: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.session.user_id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
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
};
