var express=require('express');
var mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var ObjectId=require('mongodb').ObjectID;
var assert=require('assert');
var url="mongodb://192.249.18.249:27017/config";
var bodyParser=require('body-parser');
var app=express();
var Aewol = require('./models/Aewol');
var Hanlim = require('./models/Hanlim');
var Jeju = require('./models/Jeju');
var Jocheon = require('./models/Jocheon');
var Pyosun = require('./models/Pyosun');
var Seoguipo = require('./models/Seoguipo');
var Weoljung = require('./models/Weoljung');
var Woodo = require('./models/Woodo');
var Region = require('./models/Region');
var db_name = 'config'
const port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

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


app.delete('/region',function(req,res,next){
    collection_name = 'regions'  
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

app.post('/region',function(req,res,next){
    collection_name = 'regions'  
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
  
  
  app.get('/getregion', function(req, res){
    Region.findOne({}, function(err, reg){
        if(err) return res.status(500).json({error: err});
        if(!reg) return res.status(400).json({error: 'not found'}); 
        console.log("getregion");
        res.json(reg)
    })
  });

//--------------------------

  
  app.post("/addaewol/", function(req, res){
    console.log(req.body);
    var newMusic = new Aewol({content : req.body.content, contentname : req.body.contentname, address : req.body.address, latitude : req.body.latitude, longitude : req.body.longitude});
    newMusic.save(function(err){
      if(err){
        console.error(err);
        return;
      }
      res.json({result:1});
    });
  
  });
  
  app.get("/getaewol/", function(req, res){
    Aewol.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getaewol");
        res.json(aewol)
    })
  });
  
  app.get("/gethanlim/", function(req, res){
    Hanlim.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("gethanlim");
        res.json(aewol)
    })
  });
  
  app.get("/getjeju/", function(req, res){
    Jeju.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getjeju");
        res.json(aewol)
    })
  });
  
  app.get("/getjocheon/", function(req, res){
    Jocheon.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getjocheon");
        res.json(aewol)
    })
  });
  
  app.get("/getpyosun/", function(req, res){
    Pyosun.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getpyosun");
        res.json(aewol)
    })
  });
  
  app.get("/getseoguipo/", function(req, res){
    Seoguipo.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getseoguipo");
        res.json(aewol)
    })
  });
  
  app.get("/getweoljung/", function(req, res){
    Weoljung.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getweoljung");
        res.json(aewol)
    })
  });
  
  app.get("/getwoodo/", function(req, res){
    Woodo.find({}, function(err, aewol){
        if(err) return res.status(500).json({error: err});
        if(!aewol) return res.status(400).json({error: 'not found'}); 
        console.log("getwoodo");
        res.json(aewol)
    })
  });