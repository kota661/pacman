var express = require('express');
var router = express.Router();
var os = require('os');

var hostname = os.hostname();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index.html");
  res.render('index', { hostname: hostname });
});

router.post('/score', function(req, res) {
  console.log("save score");
  res.status(200).send('thank you');
});


module.exports = router;
