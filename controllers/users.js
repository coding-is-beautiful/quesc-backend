var express = require('express')
  , router = express.Router();

router.get('/', function(req, res) {
  res.send({
    "nome": "Camarguinho",
    "idade": 42
  });
})

module.exports = router;
