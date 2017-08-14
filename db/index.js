var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quickjoin');
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var gameSchema = mongoose.Schema({
  name: String,
  system: String,
  mic: String,
  user: String,
  gamertag: String
});

var Game = mongoose.model('Game', gameSchema);
module.exports.games = Game;

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports.users = User;