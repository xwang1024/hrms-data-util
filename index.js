var fs         = require('fs');
var mysql      = require('mysql');
var mongoose   = require('mongoose');

var db = {};
db.mysql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'ndhq'
});

db.mongo = mongoose.createConnection('mongodb://localhost:27017/hrms');
db.mongo.on('error', console.error.bind(console, 'mongoose connection error: '));
db.mongo.once('open', function () { /* ... */ });

require('./models')(db.mongo, mongoose);
