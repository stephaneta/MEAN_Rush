var mongoose = require('mongoose');
var express = require('express');
var mongoos = require('./db');
// var bcrypt = require('bcrypt');
// var format_fields = require('mongoose-format-fields');
// var regex = require('regex-email');
// regex.test('tobi+ferret@vision.com')
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: { type: 'string', required: true, unique: true }
});

// userSchema .methods.setPassword = function(password) {
//   bcrypt.hash(password, 10, function(err, hash) {
//     db.users.
//   })
// }
// userSchema.plugin(format_fields);

/*
userSchema.methods.speak = function() {
  var greeting = this.name
  res.send("New user was create.");
  console.log(greeting);
}

// var User = mongoose.model('User', userSchema);
// var user = new User({name: "Steph"});

userSchema.create = function(err, user) {
  if (err) return console.log(err);
  // User.speak();
};

userSchema.find(function(err, users) {
  if (err) return console.log(err);
  console.log(users);
});

// User.find()
// User.exports;
*/


var User = mongoose.model('User', userSchema);
module.exports = User;
//exports.User;
