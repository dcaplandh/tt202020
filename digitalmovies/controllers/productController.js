const fs = require('fs'); //file system
var productos = fs.readFileSync("./database/products.json");
productos = JSON.parse(productos);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const productController = {
    listado: (req,res,next)=>{
        res.render("productos",{productos});
    },
    crear:(req,res,next)=>{
        res.render("crear");
    },
    eliminar:(req,res,next)=>{

    },
    ver:function(req,res,next){
        var productId = req.params.id;
        var producto = productos.filter(function(producto){
            //condicion true/false
            return productId == producto.id;
        });
        console.log(producto);
        //if(producto.length > 0)
        //if(typeof producto[0] != "undefined")
        if(producto.length > 0){
            res.render("detalleProducto",{
                producto:producto[0],
                toThousand
            });
        }else{
            res.render("detalleSinProducto");
        }
    }
}

module.exports = productController;