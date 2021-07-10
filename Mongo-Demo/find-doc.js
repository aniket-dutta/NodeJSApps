var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



function findOneRecord(){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playground");
        console.log("Finding... ")
        dbo.collection("courses").findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    }); 
}



function findAllRecord(){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playground");
        console.log("Finding... ")
        dbo.collection("courses").find({}).toArray((err, result) => {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    }); 
}


function findSomeRecord(){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playground");
        console.log("Finding... ")
        dbo.collection("courses").find({}, { projection: { _id: 1, name: 1, date: 1} }).toArray((err, result) => {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    }); 
}

function findBySort() {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("playground");
    var mysort = { name: 1 }; //ascending but if name: -1 for descending
    dbo.collection("courses").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  }); 
}
//findOneRecord();
//findAllRecord();
//findSomeRecord();
findBySort();
