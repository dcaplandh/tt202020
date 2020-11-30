var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const {check,validationResult,body} = require('express-validator')

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

router.get("/formulario",function(req,res,next){
  res.render("formulario")
})
router.post("/formulario",[
  check('nombre').notEmpty().withMessage("Nombre obligatorio"),
  check('nombre').isLength({min:2}).withMessage("Nombre muy corto"),
  check('edad').notEmpty().withMessage('Edad obligatoria'),
  check('url').custom(function(value,{req}){
    if(value.indexOf("https") >= 0){
      return true; // "asdfadsfasdfasdfadhttpsasdfadsfasdf" -1
    }else{
      return false;
    }

  }).withMessage("URL poco segura")
],function(req,res,next){
  let errors = validationResult(req);
  console.log(errors.errors)


  if(!errors.isEmpty()){
    return res.render('formulario',{errors:errors.errors,datos:req.body});
  }

  res.send("no hay mas errores");

})

router.get("/login",function(req,res,next){
  //preguntar si la cookie recordarme existe
  if(typeof req.cookies.usuario != 'undefined'){
    req.session.usuario = req.cookies.usuario;
    res.redirect("/versesion");
  }
    //si existe, le abro la sesion
    //sino.. que siga..

  res.render("login");
});

router.post("/login",function(req,res,next){

  let user = "admin@admin.com";
  let pass = "1234";
  
  if(user == req.body.email && pass == req.body.password){
    req.session.usuario = user;
    req.session.usuarioLogueado = true;
    req.session.developer = "Diego";

    if(typeof req.body.recordarme == "string"){
      res.cookie("usuario",user)
    }

    res.send("Ingresaste con exito");
  }else{
    res.send("Usuario y/o contraseña invalido");
  }
});

router.get("/versesion",function(req,res,next){
  console.log(req.session)
  res.send("Hola " + req.session.usuario)
})

module.exports = router;
