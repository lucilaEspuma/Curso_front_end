//1_intentar hacer el de modificar (buscar por nombre y modificar la edad y el email) y para el de eliminar necesitamos una funcion que se llama .slice().
var listaPersonas; //creamos un array para añadir los datos de nuestro formulario. Este array es global y cuando almacenamos objetos en el podemos usar el array en otra función y reconocerá las propiedades del objeto.
jQuery(document).ready(function() { //la función ready va llamar a la funcion que lleva dentro para que se ejecute cuando todo el código esté cargado.
  listaPersonas= new Array();
  jQuery("*").css("border-color","red");
})

  function addPersona(){
    var nuevaPer= new Object();
    nuevaPer.nombre = $("#inputNombre").val(); // en esta linea la funcion de buscar en el doc html elementby Id se resume en la función jQuery("#inputNombre") de la que sacamos el valor mediante la función val().
    nuevaPer.edad = $("#inputEdad").val();
    nuevaPer.email = $("#inputEmail").val();
    nuevaPer.profesion = $("#inputProfesion").val();
   
  listaPersonas[listaPersonas.length]= nuevaPer; //aquí estamos añadiendo un objeto nuevaPer a nuestra lista.
 
  }
  function addPerList() {
   
    $("#listado").html("<h2>Lista de Personas</h2>");
    for(var i= 0; i < listaPersonas.length; i++){
      var persona = listaPersonas[i];
      $("#listado").html($("#listado").html() + "<p> Nombre: \n" + persona.nombre +"\n, Edad: " + persona.edad+ "\n , Email: &lt"+ persona.email+ "&gt \n , Profesion: " +persona.profesion+"</p>");
      
    }
  }
  function modificarPersona(){


  }
  function eliminarPersona(){}