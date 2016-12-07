var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var PandaMom = require('../models/panda');
var bodyParser = require('body-parser');

// middlewares
var pandify = require('../middlewares/pandify');
var validateJSON = require('../middlewares/validateJSON');
var jsonParser = bodyParser.json();

router.get('/', function(req, res) {
  PandaMom.getAllThePandas()
    .then(pandas => res.send(pandas));
});

router.post('/novo', jsonParser, validateJSON, pandify, function(req, res) {
  let newPanda = req.body;
  PandaMom.giveBirthToaPanda(newPanda);
  res.sendStatus(201);
});

module.exports = router;
