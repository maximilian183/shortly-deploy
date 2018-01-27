var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected to mongodb://localhost:27017');
});

module.exports = db;





var usersSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  currentsid: String,
  timestamp: {type: Date, default: Date.now }
});
var userLinksSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: String,
  userlink: Number,
  timestamp: {type: Date, default: Date.now }
});

db.usersModel = mongoose.model('usersModel', usersSchema);
db.usersLinksModel = mongoose.model('usersLinksModel', userLinksSchema);
