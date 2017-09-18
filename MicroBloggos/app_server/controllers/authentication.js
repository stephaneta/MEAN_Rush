var express = require('express');
// var controller = express.Controller();
var router = express.Router();
var User = require('../models/users');
var regex = require('regex-email');
var bcrypt = require('bcrypt');
// var Q = require('q');
// var config = require('config.json');
// var _ = require('lodash');
// var jwt = require('jsonwebtoken');
// var mongo = require('mongodb');
// var db;
// db = mongo.db(config.connectionString, {native_parser: true});
// db.bind('users');

// var service = {};
// var bcrypt = require('bcrypt');

// module.exports = service;
// service.login = login;


module.exports.register = function(req, res, next) {
  username = req.body.username;
  password = req.body.password;
  email = req.body.email;
  const saltRounds = 10;
  const myPlaintextPassword = 's0/\/\P4$$w0rD';
  const someOtherPlaintextPassword = 'not_bacon';
// console.log(req.body.username)
// User = new User({username: username, password: password, email: email});
// var user  nouvel utilisateur
  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  if (regex.test(email) == false) {
    res.status(400).json({"error": "invalid email"});
    exit();
  }
   var user = User.create({
           username: username,
           password: hash,
           email: email
       },
       function(err, user) {
           if (err) throw err;
           res.json({
               user: user
           });
       });

   // user.save;
// user1.save(function(err){
// if (err) return HandleError(err) })

// var user = req.body.name;
//   console.log(req.body.name);
//   users1.create(err, user);
//   res.send("4");
//   res.json(req.body);
};
module.exports.login = function(req, res, next) {
  // res.send("5");
//   var deferred = Q.defer();
// db.users.findOne({username: username}, function(err, user) {
//   if (err) deferred.reject(err);
//   if (username && bcrypt.compareSync(password, password.hash)) {
//     deferred.resolvejwt(jwt.sign({sub: user._id}, config.secret));
//   }
//   else {
//     deferred.resolve();
//   }
// });
// return deferred.promise;
  // username = req.body.username;
  // password = req.body.password;
  // email = req.body.email;
  const saltRounds = 10;
  const myPlaintextPassword = 's0/\/\P4$$w0rD';
  const someOtherPlaintextPassword = 'not_bacon';

  var username = db.user.find(username);
  var password = db.user.find(password);
  console.log(username);
  console.log(password);
  var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  var compare = bcrypt.compareSync(myPlaintextPassword, hash);
  if(req.body.username != username || req.body.password != compare) {
    res.status(400).json({"error": "invalid username/password"});
    exit();
  }
  var user = User.find({
           username: username,
           password: password
          //  email: email
       },

       function(err, user) {
           if (err) throw err;
           res.json({
               user: user
           });
       });
       res.status(200).json({"success": "success"});
      //  exit();

};

// module.exports = controller;
