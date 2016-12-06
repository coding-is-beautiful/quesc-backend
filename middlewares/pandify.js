var pandifyHelper = require('../helpers/pandify-helper');

module.exports = function(req, res, next) {
  req.body = pandifyHelper(req.body);
  next();
}
