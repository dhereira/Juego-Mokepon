let ataqueJugador;
let ataqueEnemigo;
let vidasJugador =3;
let vidasEnemigo =3;

function iniciarJuego(){
    let reinicio = document.getElementById("reiniciar");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let spanMascotaEnemiga = document.getElementById("mascota-enemiga");
    let botonMascotaJugador = document.getElementById("boton-mascota"); 
    let botonFuego =document.getElementById("boton-fuego");
    let botonAgua =document.getElementById("boton-agua");
    let botonTierra =document.getElementById("boton-tierra");
    let spanVidasJugador =document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    function seleccionarAtaqueEnemigo() {
        let ataqueEnemigoAleatorio = Math.floor(Math.random()*3 +1);
        if(ataqueEnemigoAleatorio == 1){
            ataqueEnemigo = "Fuego";
        } else if (ataqueEnemigoAleatorio == 2){
            ataqueEnemigo = "Agua";
        } else if (ataqueEnemigoAleatorio == 3){
            ataqueEnemigo = "Tierra"; 
        }
        //alert(ataqueEnemigo);
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

    }
    function crearMensaje(resultado) {
        let sectionMensajes=document.getElementById('mensajes')
        let parrafo=document.createElement('p')
        parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado
        sectionMensajes.appendChild(parrafo)
    }  
    function atacarFuego(){
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
    }
    function seleccionarMascotaJugador(){
        let inputHipodoge = document.getElementById("hipodoge");
        let inputCapipepo = document.getElementById("capipepo");
        let inputRatigueya = document.getElementById("ratigueya");
        let mascotaEnemigaAleatorio = Math.floor(Math.random()*3 +1);
                 
        
        if(inputHipodoge.checked){
            spanMascotaJugador.innerHTML = "Hipodoge";
        } else if (inputCapipepo.checked) {
            spanMascotaJugador.innerHTML = "Capipepo"; 
        } else if (inputRatigueya.checked){
            spanMascotaJugador.innerHTML ="Ratigueya";
        }
        
        if(mascotaEnemigaAleatorio == 1){
            console.log(mascotaEnemigaAleatorio);
            spanMascotaEnemiga.innerHTML ="Hipodoge";
        } else if (mascotaEnemigaAleatorio == 2){
            console.log(mascotaEnemigaAleatorio);
            spanMascotaEnemiga.innerHTML ="Capipepo";
        } else if (mascotaEnemigaAleatorio ==3){
            console.log(mascotaEnemigaAleatorio);
            spanMascotaEnemiga.innerHTML ="Ratigueya";  
        }
    }  

    spanMascotaJugador.innerHTML = "";
    spanMascotaEnemiga.innerHTML = "";
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador )
    botonFuego.addEventListener("click", atacarFuego);
    botonAgua.addEventListener("click", atacarAgua);
    botonTierra.addEventListener("click", atacarTierra);

    reinicio.addEventListener("click", iniciarJuego);
}



window.addEventListener("load", iniciarJuego);
