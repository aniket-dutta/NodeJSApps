var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

 

function searchQuery() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playground");
        var query = { address: "Charles Park 0867" };
        dbo.collection("courses").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    });
}

// {address: 'demo 37'};  
// { address: /^S/ };

searchQuery();
