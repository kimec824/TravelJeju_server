var express=require('express');
var mongoClient = require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectID;
var assert=require('assert');
var url='mongodb://192.249.18.235:27017/test';
var bodyParser=require('body-parser');
var app=express();

var db_name = 'madcamp_proj3'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.post('/connect_mongodb'),function(request, response){
    console.log('connect mongodb...');

    connect_mongodb(response);
}

function connect_mongodb(response){
    async.waterfall([
        function(callback){
            MongoClient.connect(url,function(error,db){
                assert.equal(null,err);

                console.log('Connected correctly to server');

                db.close();
                callback(null,'connect mongodb');
            });
        }
    ],
    
    function(callback,message)
    {
        response.send(message);

        console.log('--------------------------');
    });
}



app.listen(3000, function(){
    console.log("Express server listening on port 3000");
});
   /* app.post('/',(req,res)=>{
        //res.send('Hello World!');
        mongoClient.connect('mongodb://localhost/', function(error, client){
            if (error) {
                console.log(error);
            } else {
                console.log("connected: " + db_name);
                db = client.db(db_name);
    
                collection = db.collection(collection_name);
                /*collection.find({}).toArray(function(err, results){
                    res.status(200).json({'Board' : results});
                  });
                //////////// For DEBUG //////
                var cursor = db.collection(collection_name).find();
                cursor.each(function (err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        if (doc != null) {
                            console.log(doc);
                        }
                        else {
                            console.log("END");
                        }
                    }
                });
                /////////////////////////////
    
            } 
        });
    })*/


app.get('/surveyresult', function(req, res, next) {
    collection_name = 'surveyresult'        
    
    mongoClient.connect('mongodb://localhost/', function(error, client){
        if (error) {
            console.log(error);
        } else {
            console.log("connected: " + db_name);
            mydb = client.db(db_name);

            collection = mydb.collection(collection_name);
            collection.find({}).toArray(function(err, results){
                res.status(200).json({mySurveyresult : results[0]});
                console.log(results[0]);
                console.log("get survey result");
              });

            //////////// For DEBUG //////
            var cursor = mydb.collection(collection_name).find();
            cursor.each(function (err, doc) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doc != null) {
                        console.log(doc);
                    }
                    else {
                        console.log("END");
                    }
                }
            });
            /////////////////////////////

        } 
    });
});

app.post('/surveyresult',function(req,res,next){
    collection_name = 'surveyresult'  
    console.log("enter to post");
    mongoClient.connect('mongodb://localhost/', function(error, client){
        if (error) {
            console.log(error);
        } else {
            console.log("connected: " + db_name);
            mydb = client.db(db_name);

            collection = mydb.collection(collection_name);
            collection.find({}).toArray(function(err, results){
                res.status(200).json({'myCollection' : results});
                console.log(results);
              });
            
            //collection.insert({"name":req.body.name, "phone":req.body.phone, "email":req.body.email});
            if(Object.keys(req.body).length !== 0)
                collection.insert(req.body);

            ////////////// For DEBUG ////////////////////
            var cursor = mydb.collection(collection_name).find();
            cursor.each(function (err, doc) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doc != null) {
                        console.log(doc);
                    }
                    else {
                        console.log("END");
                    }
                }
            });
          /////////////////////////////////////////////  
        } 
    });
});

app.delete('/surveyresult',function(req,res,next){
    collection_name = 'surveyresult'  
    console.log("enter to delete");
    mongoClient.connect('mongodb://localhost/', function(error, client){
        if (error) {
            console.log(error);
        } else {
            console.log("connected: " + db_name);
            mydb = client.db(db_name);

            collection = mydb.collection(collection_name);
            collection.find({}).toArray(function(err, results){
                res.status(200).json({'myCollection' : results});
              });
            
            collection.deleteMany({});
            ////////////// For DEBUG ////////////////////
            var cursor = mydb.collection(collection_name).find();
            cursor.each(function (err, doc) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doc != null) {
                        console.log(doc);
                    }
                    else {
                        console.log("END");
                    }
                }
            });
          /////////////////////////////////////////////  
        } 
    });
});


app.post('/region',function(req,res,next){
    collection_name = 'region'  
    console.log("enter to post region");
    mongoClient.connect('mongodb://localhost/', function(error, client){
        if (error) {
            console.log(error);
        } else {
            console.log("connected: " + db_name);
            mydb = client.db(db_name);

            collection = mydb.collection(collection_name);
            collection.find({}).toArray(function(err, results){
                res.status(200).json({'myCollection' : results});
                console.log(results);
              });
            
            //collection.insert({"name":req.body.name, "phone":req.body.phone, "email":req.body.email});
            if(Object.keys(req.body).length !== 0)
                collection.insert(req.body);

            ////////////// For DEBUG ////////////////////
            var cursor = mydb.collection(collection_name).find();
            cursor.each(function (err, doc) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doc != null) {
                        console.log(doc);
                    }
                    else {
                        console.log("END");
                    }
                }
            });
          /////////////////////////////////////////////  
        } 
    });
});


app.delete('/region',function(req,res,next){
    collection_name = 'region'  
    console.log("enter to delete region");
    mongoClient.connect('mongodb://localhost/', function(error, client){
        if (error) {
            console.log(error);
        } else {
            console.log("connected: " + db_name);
            mydb = client.db(db_name);

            collection = mydb.collection(collection_name);
            collection.find({}).toArray(function(err, results){
                res.status(200).json({'myCollection' : results});
              });
            
            collection.deleteMany({});
            ////////////// For DEBUG ////////////////////
            var cursor = mydb.collection(collection_name).find();
            cursor.each(function (err, doc) {
                if (err) {
                    console.log(err);
                }
                else {
                    if (doc != null) {
                        console.log(doc);
                    }
                    else {
                        console.log("END");
                    }
                }
            });
          /////////////////////////////////////////////  
        } 
    });
});