var express = require('express');
// var controller = express.Controller();
var index = require('../routes/index');

exports.usersReadAll = function(req, res, next) {
  res.send("1");
  res.json(req.body);
};
exports.usersUpdateOne = function(req, res, next) {
  res.send("2");
};
exports.usersDeleteOne = function(req, res, next) {
  res.send("3");
};

// module.exports = ctrlUsers;
