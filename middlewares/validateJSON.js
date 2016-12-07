
module.exports = function(req, res, next) {
  var conttype = req.headers['content-type'];
  if (!conttype || conttype !== 'application/json')
    res.sendStatus(400);

  next();
}
