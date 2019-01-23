var listaPersonas = new Array(); //creamos un array para añadir los datos de nuestro formulario. Este array es global y cuando almacenamos objetos en el podemos usar el array en otra función y reconocerá las propiedades del objeto.

  function addPersona(){
    var nuevaPer= new Object();
    nuevaPer.nombre = document.getElementById("inputNombre").value;
    nuevaPer.edad = document.getElementById("inputEdad").value;
    nuevaPer.email = document.getElementById("inputEmail").value;
   
  listaPersonas[listaPersonas.length]= nuevaPer; //aquí estamos añadiendo un objeto nuevaPer a nuestra lista.
  
  }
  function comprobarDatos (){

  }
  function addPerList() {
    var divlistado = document.getElementById("listado");
    divlistado.innerHTML = "<h2>Lista de Personas</h2>"
    for(var i= 0; i < listaPersonas.length; i++){
      var persona = listaPersonas[i];
      divlistado.innerHTML += "<p> Nombre: \n" + persona.nombre +"\n, Edad:" + persona.edad+ "\n , Email: </p> &lt"+ persona.email+ "&gt"; 
    }
  }
  function modificarPersona(){


  }
  function eliminarPersona(){}
  
 try{
 // throw new Error("provocando un error ");
  $("#div_texto").html("EEEEE!!!");
  funcionInexistente("Buuuuu!!");

} catch(elError){ 
 $("#div_texto").append("<p> ha habido una excepcion</p>");
 $("#div_texto").append(elError.message);

} finally {
 $("#div_texto").append("comprobando finally");


}

