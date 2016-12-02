var express = require('express')
  , router = express.Router();

router.use('/pandas', require('./pandas'));

router.get('/', function(req, res) {
  res.send('Página inicial');
});

module.exports = router;
