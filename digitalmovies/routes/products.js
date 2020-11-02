var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


/* GET users listing. */
router.get('/listado', productController.listado);
router.get('/crear', productController.crear);
router.get('/eliminar', productController.eliminar);

router.get('/ver/:id/:producto?', productController.ver);


module.exports = router;
