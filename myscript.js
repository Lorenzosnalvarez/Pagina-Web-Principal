//CONTADOR

var divDias = document.getElementById("dias");
var divHoras = document.getElementById("horas");
var divMinutos = document.getElementById("minutos");
var divSegundos = document.getElementById("segundos");

var fechaLimite = new Date("2023-07-05T00:00:00");

function actualizarContador() {
  var ahora = new Date();
  var diferencia = fechaLimite - ahora;

  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  divDias.textContent = dias.toString();
  divHoras.textContent = horas.toString();
  divMinutos.textContent = minutos.toString();
  divSegundos.textContent = segundos.toString();
}
actualizarContador();
setInterval(actualizarContador, 1000);



