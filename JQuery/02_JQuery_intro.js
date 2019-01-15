//fincion que devuelva la hora "Mes: 1, dia: 15, Hora: 10, Min: 02, Seg: 37"
function devuelveInfo(){
  var fechaActual = new Date();//variable objeto de fecha
  $("#div_texto").html("Año: </br>"+ fechaActual.getFullYear()+"Mes: </br>"+fechaActual.getMonth()+"Día: </br>"+ fechaActual.getDay()+ "Hora: </br>"+fechaActual.getHours()+": "+fechaActual.getMinutes()+": "+ fechaActual.getSeconds());

}
function dameHora(){
  var fechaActual = new Date();
  var horaFormateada= " Mes: " +fechaActual.getMonth();
  horaFormateada += " Día: " +fechaActual.getDate();
  horaFormateada += " hora: " +fechaActual.getHours();
  horaFormateada += " Min: " +fechaActual.getMinutes();
  horaFormateada += " Seg: " +fechaActual.getSeconds();
  return horaFormateada;
}
