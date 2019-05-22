var express = require('express'),
	fs = require('fs-extra'),
	routes = require('json-routing-v-ks'),
	apiDomain = express();
const MODULES = require('./modules.json');

global.moment = require('moment-timezone');
moment().tz("Asia/Kolkata").format();

apiDomain.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, secretKey, accessToken, x-access-token, token");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS, DELETE");
	res.header("Access-Control-Expose-Headers", "accessToken");
	next();
});

// customGlobalPolicy is middleware you can use for authentication
module.exports = function () {
	for (var i = 0; i < MODULES.length; i++) {
		/*@Api Routes*/
		var routeFile = '';
		routeFile = ROOT_DIR + 'app/' + MODULES[i] + "/routes";
		console.log("fs.existsSync(routeFile)")
		console.log(routeFile)
		console.log(fs.existsSync(routeFile))
		if (fs.existsSync(routeFile)) {
			var routeOptions = {
				routesPath: './app/' + MODULES[i] + "/routes",
				controllersPath: './app/' + MODULES[i] + "/controllers",
				policyPath: './app/' + MODULES[i] + '/policy',
				cors: false,
				customGlobalPolicy: ["../middleware/ensureAuthenticated:ensureAuthenticated"],
				excludeRoutes: ["/", "/user", "/image"]
			};
			routes(apiDomain, routeOptions);
		}
	}
	apiDomain.locals.moment = require('moment');
	return apiDomain;
}
