// collection is same as table in MOngodb
const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/playground";



MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("playground");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      log("Collection created!");
      db.close();
    });
  });