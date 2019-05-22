Express JSON Routes
===================
Make routes much easier to use in MVC format.
I've been searching for a while for a nodejs routing solution with a:

 -  simple configuration,
 -  super performance,
 -  simple code,
 -  MVC organization,
 -  manage only routing, no other auto magic api creation
 -  customizable
 -  least possible dependency, which uses only underscore

This is an extended version of json-routing By Giorgio Modoni

Refer Complete documentation By Giorgio Modoni: 
https://www.npmjs.com/package/json-routing

Addition to this package documentation starts here:

You can define custom global policy, their is global policy in original package, but it is only ristricted to single file as per my knowledge, this package provides a hook for policy that will be set through out the project regardless of number of files.

For E.g.
Best case 304 Redirect
Authentication

How It Works
-------------

```
//define routes default options
var routeOptions = {
    routesPath      : "./routes",
    controllerPath  : "./controllers",
    policyPath      : "./policy",
    cors            : false,
    displayRoute    : true,
    defaultAction   : "index",
    customGlobalPolicy : ["path-of-your-global-policy"],
    excludeRoutes : ["exclude-route/1", "exclude-route/2", "exclude-route/n"]
}
```