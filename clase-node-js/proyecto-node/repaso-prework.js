var cantidadDeNotificaciones = 0;
var contactosChat = ["Sofia","Ana","Carlos","Luis"];
var cantidadMensajes = 10;
var usuarioLogueado = "Pedro";
var edad = 54;
var muro = [
    "Posteo de " + contactosChat[3],
    "Posteo de " + contactosChat[0]
]
var notas = [
    [
        "Papá de Solange",
        "politica",
        "imagen.jpg",
        "texto largo",
        "carlitos"
    ],
    [
        "Subió el dolar",
        "economía",
        "dolarcito.jpg",
        "texto largo",
        "jorgito"
    ],
    [
        "Accidente en Flores",
        "Ciudad",
        "choque.jpg",
        "texto largo",
        "diego"
    ]
]
/*
let NUMERO = 34;
const USUARIO = "Diego";
console.log(usuario);
usuario = "pedro";

function contador(){
    let numero = 2;
    console.log(numero) //2
}

console.log(USUARIO) //34
*/
for(var i = 0; i < notas.length; i++){ //2
    for(var j = 0; j < notas[i].length; j++){ //5
        //console.log(notas[i][j]);
    }
    //console.log("=====");
}
//var usuarioEstaLogueado = true;

if(usuarioLogueado){ //condicion necesita como resultado un bool
    //console.log("Hola "+ usuarioLogueado);
}else{
    //console.log("Logueate por favor!");
}
if(cantidadDeNotificaciones){
    //console.log("Tenes " + cantidadDeNotificaciones + " nuevas notificaciones");
}


var carrito = [];

var zapatillas = "Zapatillas Nike Blancas";
var pelota = "Pelota de Futbol";
var heladera = "Heladera Sanyo";

function agregarAlCarrito(producto){
    carrito.push(producto);
}

agregarAlCarrito(heladera);
agregarAlCarrito(pelota);



//console.log(carrito);

for(var i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}

function sumar(n1,n2){
    if(typeof n1 == "number" && typeof n2 == "number"){
        return n1+n2;
    }else{
        return "Necesito dos numeros solamente.";
    }
}

var resultado1 = sumar("hola",7);
var resultado2 = sumar(4,9);
console.log(resultado1);
console.log(resultado2);
/*
true
1
["a"]
" "

false
0
[]
""
null
undefined
NaN
*/