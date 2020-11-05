const fs = require('fs'); //file system
var users = JSON.parse(fs.readFileSync(__dirname + "/../database/users.json"));


const userController = {
    create : function(req,res,next){
        res.render('create');
    },
    store : function(req,res,next){
        //req.body (POST)
        //req.params (:RUTA)
        //req.query (GET)

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
    }
}

module.exports = userController;