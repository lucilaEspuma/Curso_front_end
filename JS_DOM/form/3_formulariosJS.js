function primeraMayusculas(texto){
  var primeraLetra= texto.charAt(0);
  var resto = texto.substring(1);//desde el segundo caracter al final

  return primeraLetra.toUpperCase() + resto.toLowerCase();
}

function validar() {

  var inputNombre= document.getElementById("nombre");
  var inputApell_1= document.getElementById("primer_apellido");
  var inputApell_2= document.getElementById("segundo_apellido");
  var nombre = inputNombre.value;
  var Apell_1 = inputApell_1.value;
  var Apell_2 = inputApell_2.value;
  validarInput(inputNombre, nombre);
  validarInput(inputApell_1, Apell_1);
  validarInput(inputApell_2, Apell_2);
 
}

 function validarInput(inputTexto, texto){
  

  if(texto == ""){
    inputTexto.style.borderColor= "#F04040"; 
  }
  else{
   inputTexto.style.borderColor= "";
   inputTexto.value = primeraMayusculas(texto);

  }
  return texto;
 }

