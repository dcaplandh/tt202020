//objetos literales
var zapatillas = {
    nombre : "Zapatillas Nike Blancas",
    precio: 2400
}
var producto123 = {
    nombre : "Remera",
    precio: 2500,
    marca: {
        disenador: "Carlitos",
        anioDeCreacion: 2000
    },
    decirPrecio : ()=>{
        return this.precio;
    }
}
var producto1234 = {
    nombre : "Casa",
    precio: 3500,
    descuento: 10,
    marca: {
        disenador: "Carlitos",
        anioDeCreacion: 2000
    },
    decirPrecio : ()=>{
        return "$"+this.precio;
    },
    calcularDescuento: function(){
        return this.precio/100*this.descuento;
    },
    mostrarPrecioConDescuento:()=>{
        return this.precio - this.calcularDescuento();
    }
}

var perro = {
    nombre : "",
    edad: 1,
    duenio: "",
    cumpleAnios: function(){
        this.edad++;
    },
    esAdoptado: function(quien,nombre){
        this.duenio = quien;
        this.nombre = nombre.trim();
    }
}
perro.esAdoptado("Carlos","Pichicho");
perro.cumpleAnios();
console.log(perro);

var usuario = { username: 'Diego', password:"1234"}

var usuarioEnJSON = JSON.stringify(usuario);

var faceBook = {"respuesta":"fallida"}

console.log(json);

producto123.marca.disenador;
producto1234.decirPrecio();
producto1234.precio;


//json





//metodos strings
//arrow function
function sumar(n1,n2){
    return n1+n2;
}

var sumar = (n1,n2)=>n1+n2;

var saludar = nombre => "Hola " + nombre;
var calcular = (numero)=>{
    let resultado = numero +1;
    let resultado2 = resultado *3;
    return resultado2;
}

//ternario/switch
var resultado = "";
if(3 > 10){
    resultado = "es mayor!";
}else{
    resultado = "es menor!";
}
resultado = 3 > 10 ? "es mayor!" : "es menor!";

function puedePasar(nombre){
    return nombre != "Cosme Fulanito";
}

puedePasar("Carlos"); //true
puedePasar("Cosme Fulanito") //false
/*
switch(nombre){
    case "Carlos":
        console.log("Hola carlitos");
        break;
    case "Rodrigo":
        console.log("Hola Rodri!");
        break;
    default:
        console.log("Hola invitado");
        break;
}
*/
var dia = "Lunes";

switch(dia){
    case "Lunes":
        //
    case "Miercoles":
        //
    case "viernes":
        //
        break;
    default:
        console.log("No hay clases");
        break;
}
/*
function noParesDeContarImparesHasta(numero){
    let impares = 0;
    for(let i = 0; i < numero; i++){
        if(i % 2 !== 0){
            impares += 1;
        }
    }
    return impares;
}
*/
    
//while/do while
/*
for(var i=0; i < array.length; i++){

}
*/

var i = 0;
/*
while(condicion booleana){
    //hacer
    i++;
}

do{
    //hacer
}while(condicion booleana);

*/