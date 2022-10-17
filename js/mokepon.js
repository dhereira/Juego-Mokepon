const sectionSelecionarAtaque =document.getElementById("seleccionar-ataque");
const reinicio = document.getElementById("reiniciar");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemiga = document.getElementById("mascota-enemiga");
const botonMascotaJugador = document.getElementById("boton-mascota"); 



const spanVidasJugador =document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const contenedorTarjetas =document.getElementById("contenedor-tarjetas");
const sectionMensajes=document.getElementById('mensajes');
const parrafo=document.createElement('p');
const columnaJugador = document.getElementById("columna-jugador");
const columnaEnemigo = document.getElementById("columna-enemigo");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");



reinicio.style.display = "none";
sectionSelecionarAtaque.style.display ="none";

let ataqueJugador =[];
let ataqueEnemigo;
let vidasJugador =3;
let vidasEnemigo =3;
let opcionMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaEnemigaAleatorio;
let mokeponJugador ={};//desafio
let botonAtaque;
let contenedorBotonesAtaques;
let botones = [];

let botonFuego =document.getElementById("boton-fuego");
let botonAgua =document.getElementById("boton-agua");
let botonTierra =document.getElementById("boton-tierra");

class Mokepon{constructor (nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []}}

let mokepones = [];
 let hipodoge = new Mokepon('Hipodoge','../assets/mokepons_mokepon_hipodoge_attack.png', 5);   
 let capipepo = new Mokepon('Capipepo', '../assets/mokepons_mokepon_capipepo_attack.png',5);
 let ratigueya = new Mokepon('Ratigueya','../assets/mokepons_mokepon_ratigueya_attack.png',5);
 

 hipodoge.ataques.push( 
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'});

capipepo.ataques.push( 
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'});

ratigueya.ataques.push( 
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'});

mokepones.push(hipodoge,capipepo,ratigueya);
function finalizarPartida(resultado){
        parrafo.innerHTML=resultado;
        sectionMensajes.appendChild(parrafo);
        botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled= true;
        reinicio.style.display ="block";
}
function seleccionarAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(1, 3)
    if(ataqueEnemigoAleatorio == 1){
        ataqueEnemigo = "Fuego";
    } else if (ataqueEnemigoAleatorio == 2){
        ataqueEnemigo = "Agua";
    } else if (ataqueEnemigoAleatorio == 3){
        ataqueEnemigo = "Tierra"; 
    }
    
}  
function revisarVidas(){
    if(vidasJugador == 0){
        finalizarPartida("PERDISTE EL JUEGO!!!");
    }else if(vidasEnemigo ==0){
        finalizarPartida("GANASTE EL JUEGO!!!");
    }
    
}
function combate(){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("Empataste!");
    }else if((ataqueJugador == "Fuego")&&(ataqueEnemigo =="Tierra")){
        crearMensaje("Ganaste!");
        vidasEnemigo--;
    }else if((ataqueJugador == "Agua")&&(ataqueEnemigo =="Fuego")){
        crearMensaje("Ganaste!");
        vidasEnemigo--;
    }else if((ataqueJugador == "Tierra")&&(ataqueEnemigo =="Agua")){
        crearMensaje("Ganaste!");
        vidasEnemigo--;
    }else {
       crearMensaje("Perdiste!");
       vidasJugador--;
    } 
    spanVidasJugador.innerHTML = vidasJugador;
    spanVidasEnemigo.innerHTML =vidasEnemigo; 
    revisarVidas();

}
function crearMensaje(resultado) {
    sectionMensajes.innerHTML = resultado;
    const parrafoJugador=document.createElement('p');
    const parrafoEnemigo=document.createElement('p');
    parrafoJugador.innerHTML= ataqueJugador;
    parrafoEnemigo.innerHTML= ataqueEnemigo;
    columnaJugador.appendChild(parrafoJugador);
    columnaEnemigo.appendChild(parrafoEnemigo);
} 
/*  function atacarFuego(){
    ataqueJugador ="Fuego";
    seleccionarAtaqueEnemigo();
    combate();
}
function atacarAgua(){
    ataqueJugador ="Agua";
    seleccionarAtaqueEnemigo();
    combate();
}
function atacarTierra(){ 
    ataqueJugador ="Tierra";
    seleccionarAtaqueEnemigo();
    combate();
}  */   
function aleatorio (min, max){
    return  Math.floor(Math.random()*(max - min+1)+ min);
}
function seleccionarMascotaEnemigo (){
let mascotaAleatoria =aleatorio(0, (mokepones.length-1));
spanMascotaEnemiga.innerHTML =mokepones[mascotaAleatoria].nombre;
}
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = "none";         
    
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mokeponJugador = escogerMokepon(inputHipodoge.id);        
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id; 
        mokeponJugador = escogerMokepon(inputCapipepo.id);
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mokeponJugador = escogerMokepon(inputRatigueya.id);
    } else {
        alert("por favor selecciona tu mascota");
        location.reload();
    }
    seleccionarMascotaEnemigo(); 
    contenedorBotonesAtaques =document.getElementById("contenedor-ataques");
    
    //console.log(mokeponJugador);
     mokeponJugador.ataques.forEach((ataque)=>{
        //console.log(ataque);
         botonAtaque = `
        <button id=${ataque.id} class ="boton-ataque">${ataque.nombre}</button>
        `
        contenedorBotonesAtaques.innerHTML +=botonAtaque; 
    })
     botonFuego =document.getElementById("boton-fuego");
     botonAgua =document.getElementById("boton-agua");
     botonTierra =document.getElementById("boton-tierra");
     botones = document.querySelectorAll(".boton-ataque");
     

/*      botonFuego.addEventListener("click", atacarFuego);
     botonAgua.addEventListener("click", atacarAgua);
     botonTierra.addEventListener("click", atacarTierra); */
     
    sectionSelecionarAtaque.style.display ="flex";
    secuenciaAtaque();
    
}  
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            if(e.target.textContent ==='🔥'){
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';
            }else if(e.target.textContent ==='💧'){
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';
            } else if(e.target.textContent ==='🌱'){
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';  
            }
        })
    })
}

function escogerMokepon(name){
    return mokepones.find(mascota=> mascota.nombre === name);
}
function reiniciarJuego(){
    location.reload();
}  
function iniciarJuego(){

    mokepones.forEach((mokepon)=>{
        opcionMokepones=`
        <input type="radio" name="mascota" id=${mokepon.nombre} />    
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre} />
        </label>
    `
     contenedorTarjetas.innerHTML += opcionMokepones;   
    })



    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador )
/*     botonFuego.addEventListener("click", atacarFuego);
    botonAgua.addEventListener("click", atacarAgua);
    botonTierra.addEventListener("click", atacarTierra); */

    reinicio.addEventListener("click", reiniciarJuego);
}



window.addEventListener("load", iniciarJuego);
