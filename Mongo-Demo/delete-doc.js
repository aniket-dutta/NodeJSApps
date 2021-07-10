var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function deleteDocument() {
    
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("playground");
    var myquery = { address: /^O/ };
    dbo.collection("courses").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
        });
    });
} 

function deleteOne() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("playground");
        var myquery = {name: "demo"}// //{ address: 'Mountain 21' };
        dbo.collection("courses").deleteOne(myquery, function(err, obj) {
          if (err) throw err;
          console.log("1 document deleted",obj);
          db.close();
        });
    }); 
}

deleteOne();