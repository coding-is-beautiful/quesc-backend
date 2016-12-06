var express = require('express')
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quesc', err => console.log('Connected to the database!'));

app.use(express.static(__dirname + '/public'))
app.use(require('./controllers'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
})
