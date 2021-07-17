const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please input a username']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    min: [8, 'Must be at least 8 digit'],
    max: 20,
    required: [true, 'Please input a valid password']
  },
  online: {
    type: Boolean,
    default: false
  },
  pokemon_amount: {
    type: Number
  },
  pokemon: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pokemon"
    }
  ]
});

// userSchema.pre('save', function (next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//     if (err) return next(err);

//     // hash the password using our new salt
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);
//       // override the cleartext password with the hashed one
//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

//todo: onWEB make password shows **** instead of actual password12345 

const User = mongoose.model("User", userSchema);

module.exports = User;
