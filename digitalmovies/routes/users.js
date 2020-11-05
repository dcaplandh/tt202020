var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/listado', function(req, res, next) {
  res.send('respond with a resource');
});

//mostrar un formulario de creacion
router.get('/create',userController.create);
//recibo los datos del formulario
router.post('/create',userController.store);

//mostrar un formulario de edicion
router.get('/edit/:id',userController.edit);
//recibo los datos del formulario
router.post('/edit/:id',userController.update);

//eliminar un usuario
router.get("/destroy/:id",userController.destroy);

//listado de usuario
router.get("/list",userController.list);


module.exports = router;
