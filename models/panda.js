var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PandaSchema = new Schema({
  'nome': String,
  'avatar': String,
  'frase': String,
  'mood': String
});

var Panda = module.exports = mongoose.model('Panda', PandaSchema);

module.exports.giveBirthToaPanda = function(panda, callback) {
  var newPanda = new Panda(panda);
  newPanda.save(callback);
}

module.exports.getAllThePandas = function() {
  return Panda.find();
}
