
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/app2");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type :mongoose.Schema.Types.ObjectId,
    ref :'Post'
  }],
  dp: {
    type: String,
  },
  fullname : {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
 
});

userSchema.plugin(plm);

const user = mongoose.model('User', userSchema);
module.exports = user;