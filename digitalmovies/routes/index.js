var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/clase1', indexController.clase1);
router.get('/clase1A',indexController.clase1A);

router.get('/clase2', function(req, res, next) {
  res.render('clasecss');
});
router.get('/clase3', function(req, res, next) {
  res.render('clase3');
});

router.get("/ejemplo",indexController.ejemplo);
router.get("/bienvenido/:nombre",indexController.bienvenido);

router.get("/ejs",indexController.ejs);

module.exports = router;
