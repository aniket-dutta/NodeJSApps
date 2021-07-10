uri = "mongodb://localhost/playground"
const mongoose = require ('mongoose');
const log = require('debug')('app:db');
const {MongoClient} = require('mongodb');
//var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost:27017/playground";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  log("Database created!");
  db.close();
});


 
// mongoose.connect(uri)
//     .then(() => log('Connected to MongoDB..'))
//     .catch(err => log('could not connect ... error'));