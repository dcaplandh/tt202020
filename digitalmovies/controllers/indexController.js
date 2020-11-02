const fs = require('fs');
var productos = fs.readFileSync("./database/products.json");
productos = JSON.parse(productos);

const indexController = {
    index: function(req, res, next) {
        res.render('index');
    },
    clase1: function(req, res, next) {
        res.render('clase1');
    },
    clase1A:function(req, res, next) {
        res.render('clase1A');
    },
    ejemplo: function(req,res,next){
        console.log(req);
        var nombre = req.params.nombre;
        if(nombre == "Diego"){
            res.render("ejemplo")
        }else if(nombre == "Fede"){
            res.render("fede");
        }else{
            res.redirect("/");
        }
    },
    bienvenido: function(req,res,next){
        console.log(req.params)
    },
    ejs: function(req,res,next){
        var edad = 20;
        productos = [];
        var usuarioLogueado = true;
        var menu = ["Home","Conocenos","Logout"];
        res.render("ejs",{
            productos,
            edad,
            usuarioLogueado,
            menu
        });
    }
    
}

module.exports = indexController;