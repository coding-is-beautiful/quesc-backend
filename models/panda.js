var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quesc');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  var UserSchema = mongoose.Schema({
    'nome': String
  });

  UserSchema.methods.test = function() {
    console.log('test');
  }

  var User = mongoose.model('User', UserSchema);
});
