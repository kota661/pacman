var express = require('express');
var router = express.Router();
var os = require('os');

var hostname = os.hostname();

router.get('/', function(req, res, next) {
  env_val= JSON.stringify(process.env, null, '\t');
  res.render('env', { hostname: hostname, env:  env_val});
});

module.exports = router;
