const fs = require('fs'); //file system
var users = JSON.parse(fs.readFileSync(__dirname + "/../database/users.json"));
const {check,validationResult, body} = require('express-validator');

const userController = {
    name: "Usuarios",
    create : function(req,res,next){
        res.render('create');
    },
    store : function(req,res,next){
        //req.body (POST)
        //req.params (:RUTA)
        //req.query (?GET)

        //agrego el usuario al array
        users.push(req.body);
        //sobreescribo el json con el array de usuarios
        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(__dirname + "/../database/users.json", usersJSON);
        res.redirect("/users/list")
    },
    edit : function(req,res,next){
        var idUser = req.params.id;
        /*var userFound = users.filter(function(user){
            return user.id == idUser;
        });*/
        var userFound;
        for(var i=0;i < users.length;i++){
            if(users[i].id == idUser){
                userFound = users[i];
                break;
            }
        }
        if(userFound){
            res.render("edit",{userFound})
        }else{
            res.send("Usuario invalido");
        }
    },
    update:function(req,res,next){
        var idUser = req.params.id;
        
        /*var editUsers1 = [];
        for(var i=0;i < users.length;i++){   
            if(users[i].id == idUser){
               editUsers1.push(req.body);
            }else{
                editUsers1.push(users[i]);
            }
        }*/
        var editUsers2 = users.map(function(user){
            if(user.id == idUser){
                let userEditado = req.body;
                userEditado.id = idUser;
                return userEditado;
            }
            return user;
        });
        editUsersJSON = JSON.stringify(editUsers2);
        fs.writeFileSync(__dirname + "/../database/users.json",editUsersJSON);
        res.redirect("/users/list")
    },
    destroy : function(req,res,next){
        var idUser = req.params.id;
        var usersDestroy = users.filter(function(user){
            return user.id != idUser;
        });
        usersDestroyJSON = JSON.stringify(usersDestroy);
        fs.writeFileSync(__dirname + "/../database/users.json",usersDestroyJSON);
        res.redirect("/users/list")
    },
    list: function(req,res,next){
        console.log(req.query);
        res.render("list",{users});
    },
    showLoginForm: function(req,res,next){
        res.render("login");
    },
    login: function(req,res,next){
        //TOMO LOS DATOS DEL USUARIO
        //RECORRER USERS
        for(let i = 0; i < users.length; i++){
        //POR CADA UNO COMPARO EL EMAIL
            if(req.body.email == users[i].email){
                //SI COINCIDE
                //COMPARO LA CONTRASEÑA
                if(req.body.password == users[i].password){ //bcrypt()
                //SI COINCIDE
                //CREO UNA SESION
                req.session.userLogged = req.body.email;
                res.cookie('user',req.body.email);
                //REDIRIJO res
                res.redirect("/");
                }else{
                    //SI NO COINCIDE LA CONTRASEÑA
                    //LE AVISO QUE NO COINCIDEN, MOSTRANDOLE SU INTENTO DE EMAIL req.body.email res
                    res.render("login",{
                        frase:"Usuario y/o contraseña invalidas",
                        email: req.body.email
                    });
                }
            }           
            //SI NO COINCIDE EL EMAIL
            //SIGUE EL BUCLE....
        }
        //REDIRIJO PORQUE NO ENCONTRO NADA
    res.render("login",{
            frase:"Usuario y/o contraseña invalidas",
            email: req.body.email
        });
            
    },
    showRegisterForm: function(req,res,next){
        res.render("register");
    },
    register: function(req,res,next){
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("register",{errors: errors.errors})
        }

        //TOMO LOS DATOS
        let newUser = {};
        newUser.full_name = req.body.full_name;
        newUser.email = req.body.email;
        newUser.password = req.body.password; //bcrypt()
        //CREO UN OBJETO USUARIO DE UN USUARIO NUEVO
        users.push(newUser);
        //PUSHEO AL NUEVO USUARIO
        //CONVIERTO EL ARRAY EN JSON
        let usersJSON = JSON.stringify(users);
        //SOBREESCRIBO EL JSON DE USUARIOS
        fs.writeFileSync(__dirname + "/../database/users.json",usersJSON);
        //REDIRIJO AL HOME...
        res.redirect("/"); //RUTA
        //res.render("view",{}) //EJS
    }

}

module.exports = userController;