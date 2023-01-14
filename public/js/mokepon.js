const sectionSelecionarAtaque =document.getElementById("seleccionar-ataque");
const reinicio = document.getElementById("reiniciar");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemiga = document.getElementById("mascota-enemiga");
const botonMascotaJugador = document.getElementById("boton-mascota"); 
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa =document.getElementById("mapa");


const spanVidasJugador =document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const contenedorTarjetas =document.getElementById("contenedor-tarjetas");
const sectionMensajes=document.getElementById('mensajes');
const parrafo=document.createElement('p');
const columnaJugador = document.getElementById("columna-jugador");
const columnaEnemigo = document.getElementById("columna-enemigo");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");

const HIPODOGE_ATAQUE = [{nombre: '💧', id:'boton-agua'},
{nombre: '💧', id:'boton-agua'},
{nombre: '💧', id:'boton-agua'},
{nombre: '🔥', id:'boton-fuego'},
{nombre: '🌱', id:'boton-tierra'}];
const CAPIPEPO_ATAQUE =[{nombre: '🌱', id:'boton-tierra'},
{nombre: '🌱', id:'boton-tierra'},
{nombre: '🌱', id:'boton-tierra'},
{nombre: '🔥', id:'boton-fuego'},
{nombre: '💧', id:'boton-agua'}];
const RATIGUEYA_ATAQUE =[{nombre: '🔥', id:'boton-fuego'},
{nombre: '🔥', id:'boton-fuego'},
{nombre: '🔥', id:'boton-fuego'},
{nombre: '💧', id:'boton-agua'},
{nombre: '🌱', id:'boton-tierra'}]

let mokeponesEnemigos = [];
let jugadorId  =null;
let enemigoId =null;
let i;
let ataqueJugador =[];
let ataqueEnemigo =[];
let vidasJugador =0;
let vidasEnemigo =0;
let opcionMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaEnemigaAleatorio;
let mokeponJugador ={};//desafio
let mokeponEnemigo ={};
let botonAtaque;
let contenedorBotonesAtaques;
let botones = [];
let ataqueSelecionado =[false, false, false, false, false];
let totalAtaquesEnemigo =[true, true, true, true, true];
let lienzo = mapa.getContext("2d");
let botonFuego =document.getElementById("boton-fuego");
let botonAgua =document.getElementById("boton-agua");
let botonTierra =document.getElementById("boton-tierra");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src="/assets/mokemap.png";

let anchoDelMapa = window.innerWidth-20;
let anchoMaxDelMapa = 350;
if(anchoDelMapa > anchoMaxDelMapa){
    anchoDelMapa = 350;
}
let alturaQueBuscamos = anchoDelMapa*600/800;


class Mokepon{constructor (nombre, foto, vida, fotoMapa, id=null){
   this.id = id
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []   
    this.ancho = 40
    this.alto = 40
    this.x = aleatorio(0, mapa.width-this.ancho)
    this.y = aleatorio(0, mapa.height-this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0;
    this.velocidadY = 0;
        }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        ); 
    }    
 }

 let mokepones = [];
 let hipodoge = new Mokepon('Hipodoge','../assets/mokepons_mokepon_hipodoge_attack.png', 5, '../assets/hipodoge.png');   
 let capipepo = new Mokepon('Capipepo', '../assets/mokepons_mokepon_capipepo_attack.png',5, '../assets/capipepo.png');
 let ratigueya = new Mokepon('Ratigueya','../assets/mokepons_mokepon_ratigueya_attack.png',5, '../assets/ratigueya.png');
 
 
reinicio.style.display = "none";
sectionSelecionarAtaque.style.display ="none";
sectionVerMapa.style.display ="none";

 hipodoge.ataques.push(...HIPODOGE_ATAQUE);

capipepo.ataques.push(...CAPIPEPO_ATAQUE);

ratigueya.ataques.push(...RATIGUEYA_ATAQUE);

 
mokepones.push(hipodoge,capipepo,ratigueya);
function finalizarPartida(resultado){
        parrafo.innerHTML=resultado;
        sectionMensajes.appendChild(parrafo);
        reinicio.style.display ="block";
}
function seleccionarAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(1, mokeponEnemigo.vida)
    if(ataqueEnemigoAleatorio == 1){
        if (mokeponEnemigo.ataques[0].nombre == '🔥') {
            if(ataqueSelecionado[0] ==false){
                ataqueSelecionado[0] =true;
                ataqueEnemigo.push('Fuego')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}                             
            }
        }  else  if (mokeponEnemigo.ataques[0].nombre == '💧') {
            if(ataqueSelecionado[0] ==false){
                ataqueSelecionado[0] =true;
                ataqueEnemigo.push('Agua')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }  else  if (mokeponEnemigo.ataques[0].nombre == '🌱') {
            if(ataqueSelecionado[0] ==false){
                ataqueSelecionado[0] =true;
                ataqueEnemigo.push('Tierra')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}                
            }
        }          
    } else if(ataqueEnemigoAleatorio == 2){
        if (mokeponEnemigo.ataques[1].nombre == '🔥') {
            if(ataqueSelecionado[1] ==false){
                ataqueSelecionado[1] =true;
                ataqueEnemigo.push('Fuego')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}              
            }
        }  else  if (mokeponEnemigo.ataques[1].nombre == '💧') {
            if(ataqueSelecionado[1] ==false){
                ataqueSelecionado[1] =true;
                ataqueEnemigo.push('Agua')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}if(ataqueSelecionado != [true,true,true,true,true]){seleccionarAtaqueEnemigo();}                
            }
        }  else  if (mokeponEnemigo.ataques[1].nombre == '🌱') {
            if(ataqueSelecionado[1] ==false){
                ataqueSelecionado[1] =true;
                ataqueEnemigo.push('Tierra')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        } 
    }else if(ataqueEnemigoAleatorio == 3){
        if (mokeponEnemigo.ataques[2].nombre == '🔥') {
            if(ataqueSelecionado[2] ==false){
                ataqueSelecionado[2] =true;
                ataqueEnemigo.push('Fuego')
            }else {
                if(ataqueSelecionado != [true,true,true,true,true]){seleccionarAtaqueEnemigo();}  
                return;              
            }
        }  else  if (mokeponEnemigo.ataques[2].nombre == '💧') {
            if(ataqueSelecionado[2] ==false){
                ataqueSelecionado[2] =true;
                ataqueEnemigo.push('Agua')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }  else  if (mokeponEnemigo.ataques[2].nombre == '🌱') {
            if(ataqueSelecionado[2] ==false){
                ataqueSelecionado[2] =true;
                ataqueEnemigo.push('Tierra')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }          
    }else if(ataqueEnemigoAleatorio == 4){
        if (mokeponEnemigo.ataques[3].nombre == '🔥') {
            if(ataqueSelecionado[3] ==false){
                ataqueSelecionado[3] =true;
                ataqueEnemigo.push('Fuego')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}            
            }
        }  else  if (mokeponEnemigo.ataques[3].nombre == '💧') {
            if(ataqueSelecionado[3] ==false){
                ataqueSelecionado[3] =true;
                ataqueEnemigo.push('Agua')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }  else  if (mokeponEnemigo.ataques[3].nombre == '🌱') {
            if(ataqueSelecionado[3] ==false){
                ataqueSelecionado[3] =true;
                ataqueEnemigo.push('Tierra')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }          
    }else if(ataqueEnemigoAleatorio == 5){
        if (mokeponEnemigo.ataques[4].nombre == '🔥') {
            if(ataqueSelecionado[4] ==false){
                ataqueSelecionado[4] =true;
                ataqueEnemigo.push('Fuego')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}              
            }
        }  else  if (mokeponEnemigo.ataques[4].nombre == '💧') {
            if(ataqueSelecionado[4] ==false){
                ataqueSelecionado[4] =true;
                ataqueEnemigo.push('Agua')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }  else  if (mokeponEnemigo.ataques[4].nombre == '🌱') {
            if(ataqueSelecionado[4] ==false){
                ataqueSelecionado[4] =true;
                ataqueEnemigo.push('Tierra')
            }else {
                if(JSON.stringify(ataqueSelecionado) != JSON.stringify(totalAtaquesEnemigo)){seleccionarAtaqueEnemigo();}
            }
        }          
    }
   
}  
function revisarVidas(){
   
        if(vidasJugador < vidasEnemigo){
            finalizarPartida("PERDISTE EL JUEGO!!!");
        }else if(vidasEnemigo < vidasJugador){
            finalizarPartida("GANASTE EL JUEGO!!!");
        }else {
            finalizarPartida("EMPATASTE EL JUEGO!!!")
        }
    
}
function combate(){
    clearInterval(intervalo);

    for(let i=0;i<ataqueJugador.length;i++){
        if(ataqueJugador[i]===ataqueEnemigo[i]){
            crearMensaje(ataqueJugador[i], ataqueEnemigo[i]);
        }else if((ataqueJugador[i]=='Fuego')&&(ataqueEnemigo[i]=='Tierra')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje(ataqueJugador[i], ataqueEnemigo[i]);            
        }else if((ataqueJugador[i]=='Agua')&&(ataqueEnemigo[i]=='Fuego')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje( ataqueJugador[i], ataqueEnemigo[i]);
        } else if((ataqueJugador[i]=='Tierra')&&(ataqueEnemigo[i]=='Agua')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje(ataqueJugador[i], ataqueEnemigo[i]);
        } else {
            vidasEnemigo++;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
            crearMensaje(ataqueJugador[i], ataqueEnemigo[i]);
        } 
    }
    revisarVidas();
}
function crearMensaje( jugador, enemigo) {
    //sectionMensajes.innerHTML = resultado;
    const parrafoJugador=document.createElement('p');
    const parrafoEnemigo=document.createElement('p');
    parrafoJugador.innerHTML= jugador;
    parrafoEnemigo.innerHTML= enemigo;
    columnaJugador.appendChild(parrafoJugador);
    columnaEnemigo.appendChild(parrafoEnemigo);
}
function aleatorio (min, max){
    return  Math.floor(Math.random()*(max - min+1)+ min);
}
function seleccionarMascotaEnemigo (enemigo){
mokeponEnemigo =enemigo;
spanMascotaEnemiga.innerHTML =enemigo.nombre;
}
function seleccionarMascotaJugador(){         
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
        return;
    }
    
    sectionSeleccionarMascota.style.display = "none"; 
    enviarMokepon((mokeponJugador.nombre));    
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
     

    sectionVerMapa.style.display ="flex";
    iniciarMapa();
 
    secuenciaAtaque();
    
}  
function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            if(e.target.textContent ==='🔥'){
                ataqueJugador.push('Fuego');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';
                boton.disabled =true;
            }else if(e.target.textContent ==='💧'){
                ataqueJugador.push('Agua');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';
                boton.disabled = true;
            } else if(e.target.textContent ==='🌱'){
                ataqueJugador.push('Tierra');
                console.log(ataqueJugador);
                boton.style.background = '#ED8240';  
                boton.disabled = true;
            }
            //seleccionarAtaqueEnemigo();
            if(ataqueJugador.length===5){
                enviarAtaques();
            }

            //combate();
            console.log(ataqueEnemigo)
        })
    })
    
}
function enviarAtaques(){
    fetch(`http://192.168.1.161:8080/mokepon/${jugadorId}/ataques`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50);
}
function obtenerAtaques(){
    fetch(`http://192.168.1.161:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res){
        if(res.ok){
            res.json()
            .then(function({ataques}){
                if(ataques.length===5){
                    ataqueEnemigo=ataques;
                    combate();
                }
            })
        }
    })
}
function escogerMokepon(name){
    return mokepones.find(mascota=> mascota.nombre === name);
}
function reiniciarJuego(){
    borrarId();
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

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador );
    
    reinicio.addEventListener("click", reiniciarJuego);
    unirseAlJuego();
}
function pintarCanvas(){
    mokeponJugador.x = mokeponJugador.x + mokeponJugador.velocidadX;
    mokeponJugador.y = mokeponJugador.y + mokeponJugador.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);  
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );  
    enviarPosicion(mokeponJugador.x, mokeponJugador.y)
    mokeponJugador.pintarMokepon();

    mokeponesEnemigos.forEach(function (mokepon){
        if(mokepon !== null){
        mokepon.pintarMokepon();
        revisarColision(mokepon);
    }        
    })


 
}
function moverDerecha(){
    mokeponJugador.velocidadX =5;
    }
function moverIzquierda(){
    mokeponJugador.velocidadX = -5;
    }
function moverAbajo(){
    mokeponJugador.velocidadY = 5;
    }
function moverArriba(){
    mokeponJugador.velocidadY = -5;
    }
 function detenerMovimiento(){
    mokeponJugador.velocidadX = 0;
    mokeponJugador.velocidadY = 0;
 }   
 function moverConTeclas(event){
    switch(event.key){
        case "ArrowUp": 
            moverArriba();
            break
        case "ArrowDown":
            moverAbajo();
            break
        case "ArrowRight":
            moverDerecha();
            break
        case "ArrowLeft":
            moverIzquierda();
            break
        default:
           break           
    }
 }
 function iniciarMapa(){
    mapa.width = anchoDelMapa;
    mapa.height = alturaQueBuscamos ;
    intervalo = setInterval(pintarCanvas,50);
    window.addEventListener("keydown", moverConTeclas);
    window.addEventListener("keyup", detenerMovimiento);
 }
 function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    const arribaMascota = mokeponJugador.y;
    const abajoMascota = mokeponJugador.y + mokeponJugador.alto;
    const derechaMascota = mokeponJugador.x + mokeponJugador.ancho;
    const izquierdaMascota = mokeponJugador.x;


    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }
    detenerMovimiento();
    clearInterval(intervalo);
    console.log("ok")
    enemigoId =enemigo.id;
    sectionVerMapa.style.display ="none";
    sectionSelecionarAtaque.style.display ="flex";
    seleccionarMascotaEnemigo(enemigo); 
 }
function unirseAlJuego(){
    fetch("http://192.168.1.161:8080/unirse")
        .then(function (res){
            if(res.ok){
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta);
                        jugadorId=respuesta;
                    })
            }
        })
}
function enviarMokepon(nombreMascota){
    fetch(`http://192.168.1.161:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            mokepon: nombreMascota
        })
        })
}
function enviarPosicion(x, y){
    fetch(`http://192.168.1.161:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })        
    })
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function({enemigos}){
                console.log(enemigos);
                
                mokeponesEnemigos= enemigos.map(function (enemigo) {
                    let mokeponDeOtro= null;                    
                if(enemigo.mokepon !== undefined){
                   const mokeponNombre = enemigo.mokepon.nombre || ""; 
                   if(mokeponNombre==="Hipodoge"){
                        mokeponDeOtro = new Mokepon('Hipodoge','../assets/mokepons_mokepon_hipodoge_attack.png', 5, '../assets/hipodoge.png', enemigo.id);
                   } else if(mokeponNombre === "Capipepo"){
                        mokeponDeOtro = new Mokepon('Capipepo', '../assets/mokepons_mokepon_capipepo_attack.png',5, '../assets/capipepo.png', enemigo.id);
                   }else if(mokeponNombre === "Ratigueya"){
                        mokeponDeOtro = new Mokepon('Ratigueya','../assets/mokepons_mokepon_ratigueya_attack.png',5, '../assets/ratigueya.png', enemigo.id);
                   }
                   mokeponDeOtro.x = enemigo.x;
                   mokeponDeOtro.y = enemigo.y;
                }
                   return mokeponDeOtro;
                  
                })
                   
                
                
            })
        }
    })
}
function borrarId(){
    fetch(`http://192.168.1.161:8080/mokepon/${jugadorId}/delete`,{
        method: "delete",
        headers:{
            "Content-Type": "application/json"
        },
       
    })
}
window.addEventListener("load", iniciarJuego);
