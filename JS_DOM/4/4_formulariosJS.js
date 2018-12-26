//4_formulariosjs.js
/*
1- Validar que el usuario introduzca un email y contraseña
1.1- Marcar en rojo los campos que no sean rellenados.
2- Comprobar que son iguales entre si
2.1- Marcar en verde cuando sean iguales
3 - Cuando esté correcto, indicar "Registrado con éxito" y el fondo de table en verde
 */ 

 function validarEP(){
   //validar que introducen en el 
   /*var emilio = document.getElementById("email");
   var contraseña1= document.getElementById("password");
   var contraseña2= document.getElementById("password_rep");*/
   /*var inp_emilio = emilio.value;
   var inp_contraseña1 = contraseña1.value;
   var inp_contraseña2 = contraseña2.value;*/

  

 }


 function validacion(id){ // aqui la funcion recoge los id (getElementById()) y los values (.value) de sus id.
  var inputTexto = document.getElementById(id);
  var texto= inputTexto.value;
  
  if(texto == ""){
    inputTexto.style.borderColor= "#F04040";
    //poner fondo rojo
    return false;
  }
  else{
    inputTexto.style.borderColor= "";
    //validar poner fondo verde
    //convertir primera a mayuscula
    return true;
  }

  function validarParInput(id_1,id_2){ //aqui se llama a la función validacion(id) y se definen las condiciones para cambiar a naranja o verde segun el input del usuario, tb se recoje el valor de los if/else en return true o return false para poder usar esta función en validarFormulario() como buleano de las condiciones de if/else.
    var input_1 = document.getElementById(id_1);
    var input_1 = document.getElementById(id_2);

  }

  function validarFormulario (){
    // valida mediante la funcion validarParInput(id_1,id_2) en condicionales if.
  }
 }

 