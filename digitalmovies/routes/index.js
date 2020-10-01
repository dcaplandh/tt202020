var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/clase1', function(req, res, next) {
  res.render('clase1');
});
router.get('/clase1A', function(req, res, next) {
  res.render('clase1A');
});
router.get('/clase2', function(req, res, next) {
  res.render('clasecss');
});

module.exports = router;
