var express = require('express')
  , router = express.Router();

router.use('/user', require('./users'));

router.get('/', function(req, res) {
  res.render('Página inicial');
});

module.exports = router;
