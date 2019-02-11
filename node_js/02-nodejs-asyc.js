//Funciones callback
//esquema de programacion asincrona
progPrincipal();

function progPrincipal() { //invocamos un proceso y cuando termine que avise en A
  console.log("programa Principal: COmenzando");
  funProceso(callBack_A);
  console.log("programa Principal: Haciendo Otra cosa");
  funProceso(callBack_B);
  console.log("programa Principal: terminando");
}

function callBack_A(todoCorrecto) {
  console.log("funCallBack_A: hemos terminado " + todoCorrecto);
}

function callBack_B(todoCorrecto) {
  if (todoCorrecto) {
    console.log("funCallBack_B: hemos terminado");
  } else {
    console.log("funCallBack_B: algo ha ido mal");
  }

}

//proceso independiente (jQuery, Ajax, módulo propio)
function funProceso(funDeAviso) //esta variable recibe  una funcion como parámetro
{
  console.log("funProceso: comenzando el proceso");
  let todoOk = false;
  funDeAviso(todoOk); // la estructura general de fun proceso no cambia, pero la funcionalidad de callBack A o B si.
  console.log("funProceso: terminando el proceso");
}
//en NODEJS se rompe el orden lineal de la programacion, viene definido por un proceso externo con las funciones CallBack.
// Todas las tareas se están ejecutando en un solo hilo.
//la entrada y salida de datos tiene una arquitectura orientada a eventos.
//node js trabaja con un solo hilo de ejecucion.