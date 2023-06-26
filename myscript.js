var diasElement = document.getElementById("dias");
var horasElement = document.getElementById("horas");
var minutosElement = document.getElementById("minutos");
var segundosElement = document.getElementById("segundos");

var fechaLimite = new Date("2023-06-27T00:00:00");

function actualizarContador() {
  var ahora = new Date();
  var diferencia = fechaLimite - ahora;

  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  diasElement.textContent = dias.toString();
  horasElement.textContent = horas.toString();
  minutosElement.textContent = minutos.toString();
  segundosElement.textContent = segundos.toString();
}
actualizarContador();
setInterval(actualizarContador, 1000);

