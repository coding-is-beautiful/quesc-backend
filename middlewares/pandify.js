var pandifyHelper = require('../helpers/pandify-helper');

module.exports = function(req, res, next) {
  req.query.nome = pandifyHelper(req.query.nome);
  next();
}
