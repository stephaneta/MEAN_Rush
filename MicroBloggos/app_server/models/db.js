var mongoose = require('mongoose');
// var users = require('users')
//mongoose.connect('mongodb://localhost/dbURI');

var db = mongoose.connect('mongodb://localhost/users', {
  useMongoClient: true
});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

module.exports = mongoose;
