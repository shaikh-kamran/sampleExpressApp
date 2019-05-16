var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var userRouter = require('./routes/user');
var MongoClient = require('mongodb').MongoClient;
var url = config.url + config.database.host + "/" + config.database.port;
const express = require('express');
const app = express();
const port = config.server.port;

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('static'));
app.use('/user', employeeRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type: application/json, Accept");
    next();
});
app.listen(port, () => console.log("app started listening on PORT:" + port));

app.all('*', (req, res) => {
    res.send({
        status: 0,
        message: 'Invalid request, Please check the request url',
        data: null
    })
})
