var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PandaMom = require('../models/panda');
var bodyParser = require('body-parser');

// middlewares
var pandify = require('../middlewares/pandify');
var jsonParser = bodyParser.json();

router.get('/', function(req, res) {
  PandaMom.getAllThePandas()
    .then(pandas => res.send(pandas));
});

router.post('/novo', jsonParser, pandify, function(req, res) {
  let newPanda = req.body;
  PandaMom.giveBirthToaPanda(newPanda, err => console.log(err));
  res.sendStatus(201);
});

module.exports = router;
