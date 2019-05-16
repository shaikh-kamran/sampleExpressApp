var express = require('express');
var router = express.Router();
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];
var MongoClient = require('mongodb').MongoClient;
var url = config.url + config.database.host + "/" + config.database.port;

router.get('/', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, database) {
        var db = database.db(config.database.db);
        var data = [];
        console.log("request received for fetching all the users");
        db.collection('User').find().toArray((err, results) => {
            if (err) {
                console.log("failed to fetch users");
                res.send({
                    status: 0,
                    message: 'error in fetching data',
                    data: null
                });
                database.close();
            } else {
                console.log("fetched all the users");
                res.send({
                    status: 1,
                    message: 'fetched successfully',
                    data: results
                });
                database.close();
            }
        })
    })

})