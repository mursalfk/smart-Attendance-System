const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({

   fullname: {
    type: String,
    required: true
    
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true
  },
 roll: {
    type: String,
    required: true,
    unique:true
  },
 username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mark = mongoose.model('mark', userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({

   fullname: {
    type: String,
    required: true
    
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true
  },
 roll: {
    type: String,
    required: true,
    unique:true
  },
 username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Mark = mongoose.model('users', userSchema);
