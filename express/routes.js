const routes = {
    home: function(request,response){
        response.send("Estoy en el home");
    },
    aboutUs: function(request,response){
        response.send("Nosotros somos...");
    },
    delivery:function(request,response){
        response.send("Pedinos ahora...");
    },
    contact:function(request,response){
        response.send("Formulario de contacto");
    },
    notFound:function(request,response){
        response.send("No se encuentra la ruta " + request.url);
    }
}

module.exports = routes;