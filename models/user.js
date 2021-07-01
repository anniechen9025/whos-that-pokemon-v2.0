const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function(email) {
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
    min: [6, 'Must be at least 6 digit'],
    max: 12,
    required: [true, 'Please input a valid password']
  },
  pokemon_amount: {
    type: Number
  }
});

//todo: consider the logic for adding pokemon_amount when each guessing game is done

//todo: onWEB make password shows **** instead of actual password12345 
// class User extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }
//todo: Need to figure out how to hash the password before store into db
// schema.pre('hash', (NewuserSchema) => {NewuserSchema.password = await bcrypt.hash(NewuserSchema.password, 10)});
// schema.post('hash', (UpdateduserSchema) => {UpdateduserSchema.password = await bcrypt.hash(UpdateduserSchema.password, 10)});
// MYSQL:
// hooks: {
//   beforeCreate: async (newUserData) => {
//     newUserData.password = await bcrypt.hash(newUserData.password, 10);
//     return newUserData;
//   },
//   beforeUpdate: async (updatedUserData) => {
//     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//     return updatedUserData;
//   },
// },

const User = mongoose.model("User", userSchema);

module.exports = User;
