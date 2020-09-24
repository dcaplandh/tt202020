function sumar(n1,n2){
    return n1+n2;
}
function restar(n1,n2){
    return n1-n2;
}
function dividir(n1,n2){
    return n1/n2;
}
function multiplicar(n1,n2){
    return n1*n2;
}
function calcular(n1,accion,n2){
    if(typeof accion == "function"){
        return accion(n1,n2);
    }else{
        return "Error al ejecutar";
    }
}
console.log(calcular(8,dividir,9))
/*
La primera función debe llamarse agregarHttp. Esta recibe por parámetro una URL a la cual le concatena el String "http://" al comienzo de esa URL y luego retorna ese valor. La segunda función se llama procesar y recibe una lista de sitios web y una función. La función procesar devuelve un array que contiene todos los resultados de aplicar a cada elemento la función pasada.
*/

function agregarHttp(url){
    return "http://" + url;
}
var sitios = ["facebook.com","clarin.com","instagram.com","ole.com.ar"];
function procesar(lista){
    /*var nuevossitios = [];
    for (let index = 0; index < lista.length; index++) {
        nuevossitios.push(agregarHttp(lista[index]))
    }
    return nuevossitios;*/
    var nuevossitios = lista.map(function(cadasitio){
        return agregarHttp(cadasitio);
    });
    return nuevossitios;
}
//console.log(procesar(sitios));

function redes(lista){
    var soloRedes = lista.filter(function(cadasitio){
        return cadasitio == "facebook.com" || cadasitio == "instagram.com";
    });
    return soloRedes;
}
var texto = sitios.reduce(function(acumulador,cadasitio){
    return acumulador + cadasitio;
},"");

var numeros = [1,2,3,4,5,6,7,8,9,10];

var sumartodos = numeros.reduce(function(acum,cadanumero){
    return acum + cadanumero;
},0);

var nuevossitios = []
//01234567
//console.log(sumartodos);
//NaN
//055
//055
//012345678910
//010203040506070809010

var fechaActual = new Date();
//console.log(fechaActual.getHours() + " : " + fechaActual.getMinutes() + " : " + fechaActual.getSeconds())
var fechaAnterior = new Date("1492-10-12");
var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
/*
switch(mes){
    case 0:
        var mesActual = "Enero";
        break;
    case 1:
        var mesActual = "Febrero";
        break;
    //...
}
*/
//console.log(fechaActual.getMonth())
//console.log(dias[fechaAnterior.getDay()])
console.log(Date.now());

var letras = ["a","b","c","d"];
var masLetras = ["e","f","g","h"];

var todasLasLetras = [...letras,...masLetras,"i","j"];
//["a","b","c","d","e","f","g","h","i","j"]
function sumar1(...numeros) {
    let resultado = 0;

    numeros.forEach(function (n) {
        resultado += n;
    });

    return resultado;
}
sumar1(45,20,3,67,34,90);

var carrito = [];
/*
var familia = ["Diego","Juan","Ana","Pedro"];
var [,,,hermano] = familia;
var todosHermanos = [hijo,hermana,hermano];
*/
var {log} = console; 

log();
