const mongoose = require('mongoose');
const { stringify } = require('uuid');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  Image:{
    type : String
  },
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  }
});

const post = mongoose.model('Post', postSchema);

module.exports= post;
