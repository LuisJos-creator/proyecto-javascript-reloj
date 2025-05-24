// declaraciones de constantes globales
const ampmEL = document.querySelector('#ampm');
const horaEL = document.querySelector('#hora');
const minutosEL = document.querySelector('#minuto');
const segundosEL = document.querySelector('#segundo');
const fechaEL = document.querySelector('#fecha');

// Evento DOMCOntentLoaded

addEventListener("DOMContentLoaded", function(){
   mostrarFecha();
})


//funciones

function mostrarFecha(){
   //obtener datos
   let year = new Date().getFullYear()
   let month = new Date().getUTCMonth()
   let day = new Date().getDate()
   let week = new Date().getDay() - 1
   let aMes = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
   let aSemana =['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
   

   fechaEL.innerText=`${day}/${aSemana[week]} de ${aMes[month]} del ${year}`
}


//eventos