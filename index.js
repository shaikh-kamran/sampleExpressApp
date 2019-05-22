var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
const express = require('express');
const app = express();
const port = config.server.port;
global.ROOT_DIR = __dirname + '/';

app.use(express.json());
var allroutes = require('./config/route-config')();
console.log("allroutes")
app.use(allroutes);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type: application/json, Accept");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS, DELETE");
	res.header("Access-Control-Expose-Headers", "accessToken");
    next();
});
app.use(function (req, res, next) {
    console.log('Request Type');
    console.log(req.method);
    console.log('Request URL');
    console.log(req.originalUrl);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})
app.listen(port, () => console.log("app started listening on PORT:" + port));
