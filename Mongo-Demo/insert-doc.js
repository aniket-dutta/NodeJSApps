// document in mongo is same as record
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("playground");
  var myobj = { 
    name: "Masuka 5.0", 
    address: "Charles Park 0867",
    tags: ["HP co", 'Saute Hood'],
    date: new Date().toTimeString(),
    isPublished: false

};
  dbo.collection("courses").insertOne(myobj, function(err, res) { // can also use inser many for object with more han one 
    if (err) throw err;
    console.log("1 document inserted", res.ops);
    db.close();
  });
}); 

