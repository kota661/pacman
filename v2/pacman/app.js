/*eslint-env node*/

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// create a new express server
var app = express();
var port = process.env.PORT || process.env.CF_INSTANCE_PORT || process.env.VCAP_APP_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// start server on the specified port and binding host
app.listen(port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log("server starting. app listening on port " + port);
});