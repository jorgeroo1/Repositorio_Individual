// contenido inicial
class Game{
    constructor(titulo,genero,consola){
        this.titulo = titulo;
        this.genero = genero;
        this.consola = consola;
    }
}
const juego1 = new Game("The Witcher 3: Wild Hunt", "Action RPG", "PlayStation 4")
const juego2 = new Game("Red Dead Redemption 2", "Action-Adventure", "Xbox One")
const juego3 = new Game("Fortnite", "Battle Royale", "PC")
let listadoCompletoJuego = [];
listadoCompletoJuego.push(juego1);
listadoCompletoJuego.push(juego2);
listadoCompletoJuego.push(juego3);

let btnAnadirJuego = document.getElementById("botonAccion");
let listadoJuego = document.getElementById("gameList");
let datosJuego = document.querySelectorAll("div input");

document.addEventListener("keyup", pulsacionTecla);
function pulsacionTecla(ev){
    if(ev.key === 'a'){
        if(true){
            listadoJuego.innerHTML = '';
        }
        mostrarInput();
        btnAnadirJuego.removeEventListener("click", listaJuegos);
        btnAnadirJuego.addEventListener("click", insertarJuego);
    }
    else if(ev.key === 'd'){
        cambiarModo();
        btnAnadirJuego.removeEventListener("click", insertarJuego);
        btnAnadirJuego.addEventListener("click", listaJuegos);
    }
    else if (ev.key === 'e'){
        borrarDatos();
    }
}
function insertarJuego(){
    let juego4;
    for(let i= 0; i<datosJuego.length;i++){
        console.log(datosJuego[i].value);
        juego4 = new Game(datosJuego[0].value, datosJuego[1].value,datosJuego[2].value);
    }
    listadoCompletoJuego.push(juego4);
}
function cambiarModo(){
    console.log(datosJuego.length);
    for(let i= 0; i<datosJuego.length; i++){
        datosJuego[i].style.display = 'none';
    }
    btnAnadirJuego.innerHTML = "Mostrar Datos / actualizar Lista";
}
function mostrarInput(){
    for(let i= 0; i<datosJuego.length; i++){
        datosJuego[i].classList.display = 'block';
    }
    btnAnadirJuego.innerHTML = "Añade un juego";
}
function borrarDatos(){
    for(let i= 0; i<datosJuego.length; i++){
        datosJuego[i].value = '';
    }
}
function listaJuegos(){
    if(listadoJuego){
        listadoJuego.innerHTML = '';
    }
    for(let i = 0; i<listadoCompletoJuego.length; i++){
        let crearP = document.createElement("p");
        crearP.innerHTML = listadoCompletoJuego[i].titulo + "<p></p>" + "Plataforma: " 
        + listadoCompletoJuego[i].genero + "<br></br>"+"Genero: " + listadoCompletoJuego[i].consola;
        listadoJuego.appendChild(crearP);
    }
}


