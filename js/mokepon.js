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
/*         botonFuego.disabled = true;
        botonAgua.disabled = true;
        botonTierra.disabled= true; */
        reinicio.style.display ="block";
}
function seleccionarAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(1, mokeponEnemigo.vida)
    //console.log(ataqueEnemigoAleatorio);
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
    if(JSON.stringify(ataqueSelecionado) == JSON.stringify(totalAtaquesEnemigo)){
        if(vidasJugador < vidasEnemigo){
            finalizarPartida("PERDISTE EL JUEGO!!!");
        }else if(vidasEnemigo < vidasJugador){
            finalizarPartida("GANASTE EL JUEGO!!!");
        }else {
            finalizarPartida("EMPATASTE EL JUEGO!!!")
        }
    }
}
function combate(){
        i =ataqueJugador.length-1;
        if(ataqueJugador[i]==ataqueEnemigo[i]){
            crearMensaje('Empate', ataqueJugador[i], ataqueEnemigo[i]); 
        } else if((ataqueJugador[i]=='Fuego')&&(ataqueEnemigo[i]=='Tierra')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje('Ganaste', ataqueJugador[i], ataqueEnemigo[i]);            
        }else if((ataqueJugador[i]=='Agua')&&(ataqueEnemigo[i]=='Fuego')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje('Ganaste', ataqueJugador[i], ataqueEnemigo[i]);
        } else if((ataqueJugador[i]=='Tierra')&&(ataqueEnemigo[i]=='Agua')){
            vidasJugador++;
            spanVidasJugador.innerHTML =vidasJugador;
            crearMensaje('Ganaste', ataqueJugador[i], ataqueEnemigo[i]);
        } else {
            vidasEnemigo++;
            spanVidasEnemigo.innerHTML = vidasEnemigo;
            crearMensaje('Perdiste', ataqueJugador[i], ataqueEnemigo[i]);
        } 
    revisarVidas();
}
function crearMensaje(resultado, jugador, enemigo) {
    sectionMensajes.innerHTML = resultado;
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
function seleccionarMascotaEnemigo (){
let mascotaAleatoria =aleatorio(0, (mokepones.length-1));
mokeponEnemigo = mokepones[mascotaAleatoria];
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
            seleccionarAtaqueEnemigo();
            combate();
            console.log(ataqueEnemigo)
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

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador );
    revisarVidas();
    reinicio.addEventListener("click", reiniciarJuego);
}

window.addEventListener("load", iniciarJuego);
