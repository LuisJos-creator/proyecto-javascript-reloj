// declaraciones de constantes globales

const ampmEL = document.querySelector('#ampm');
const horaEL = document.querySelector('#hora');
const minutosEL = document.querySelector('#minuto');
const segundosEL = document.querySelector('#segundo');
const fechaEL = document.querySelector('#fecha');
const botonFondoEL = document.querySelector('#botones');
const bodyEL = document.querySelector('body');
let numero = 1;


// Evento DOMCOntentLoaded

addEventListener("DOMContentLoaded", function(){
   setInterval(function(){
   mostrarFecha();
}, 100);

setInterval(function(){
   cambiarFondoP();
}, 5000);
})



//funciones
function cambiarFondoP(){
   numero += 1;
   if (numero > 7) {
      numero = 1;
   }
   let url = `img/fondo${numero}.avif`;
   console.log(url);
   bodyEL.style.backgroundImage = `url(${url})`;
}

function cambiarFondo(url){
   console.log(url);
   bodyEL.style.backgroundImage = `url(${url})`;
}

function mostrarFecha(){
   //obtener datos
   let year = new Date().getFullYear()
   let month = new Date().getUTCMonth()
   let day = new Date().getDate()
   let week = new Date().getDay() - 1
   let aMes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
   let aSemana =['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
   let hora = new Date().getHours()
   let minutos = new Date().getMinutes()
   let segundos = new Date().getSeconds()
   let ampm = hora >= 12 ? 'PM' : 'AM'

   fechaEL.innerText=`${day}/${aSemana[week]} de ${aMes[month]} del ${year}`
   horaEL.innerText = hora % 12 || 12;
   minutosEL.innerText = minutos < 10 ? '0' + minutos : minutos;
   segundosEL.innerText = segundos < 10 ? '0' + segundos : segundos;
   ampmEL.innerText = ampm;
}


//eventos

