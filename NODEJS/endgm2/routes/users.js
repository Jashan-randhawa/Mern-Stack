const { promiseImpl } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingendgm2");

const userschema = mongoose.Schema({
  username: String,
  password :String,
  secret: String
});

module.exports = mongoose.model("user",userschema);