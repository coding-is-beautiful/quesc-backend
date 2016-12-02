var express = require('express')
  , router = express.Router()
  , pandify = require('../middlewares/pandify');


router.get('/', function(req, res) {
  res.send({
    "nome": "Camarguinho",
    "idade": 42
  });
});

router.post('/novo', pandify, function(req, res) {
  res.send(req.query.nome);
});

module.exports = router;
