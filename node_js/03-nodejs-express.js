"use strict";
var miExpress = require("express");
var app = miExpress(); //modulo que contiene una funcion que al ejecutarla nos devuelve un objeto, el de express que gestiona las peticiones.
var reservas = {
  "GET": function () {
    return "['todas', 'las', 'reservas']";
  },
  "POST": function (reservas) {
    console.log("Añadir reservas:" + reservas.id + "" + reservas.nombre);
  }
}

var alResponder = (request, response) => {
  console.log("Acceso a la peticion ", request.originalUrl);
  //response.send("ruta: " + request.originalUrl + "-Verbo: " + request.method); // verbo es el metodo. .metodo te da la informacion del metodo que has usado que este caso es .get
  var metodo = reservas[request.method]; //manera dinámica de invocar a funciones, los corchetes son la nomenclatura de objetos de javascript
  console.log(metodo());
  response.send(metodo());
}
//cuando alguien haga una peticion http "/"
app.get("/", alResponder); //el metodo get pasa parámetros por la Url. al infor que se envia va directamente en la Url. 
app.post("/", alResponder);
app.delete("/", alResponder);
app.all("/paratodos", alResponder);
app.all("/enotrolado", alResponder);
app.listen(9000); //escucha en el puerto 9000 
console.log("Servidor express lanzado.");

//API rest: en una URL se publican operaciones CRUD (Create (.post), Read (.get), Update (.put), Delete (.delete)), las operaciones y sus métodos corespondientes. Este es el servidor de una API rest y luego esta el client  de la API rest. la api rest en el lado del servidor se encarga de escuchar y responder peticiones.