
/*1 - Crear una  funcion elementoPorId(id)  que devuelva un elemento por su id
1.1 Probar la funcion.*/

function generar(){
  /*elementoPorId("div_form").style.backgroundColor = "#F04040";*/
  cambiarAtributoPorId("div_form", "style", "background-color:greenyellow")
 
  adjuntarElementoPorId("div_form", "input");
  adjuntarElementoPorId("div_form", "br");
  adjuntarElementoPorId("div_form", "input");
  adjuntarElementoPorId("div_form", "br");
  adjuntarElementoPorId("div_form", "img");

  }
  
function elementoPorId(id) {
var elementId = document.getElementById(id);
return elementId;

}

/*2 - Crear una funcion cambiarAtributoPorId(ID, Atributo, valor) que modifique el atributo de su elemento buscado por su id.
      2.1 Probar la funcion.*/
function cambiarAtributoPorId(id, Atributo, valor){
  elementoPorId(id).setAttribute(Atributo, valor);




}


/*3- Crear una función adjuntarElementoPorId(id,etiqueta) que genere un elemento tipo etiqueta y lo adjunte a un elemento encontrado por id. element.appendChild(node)
      3.1 Probar la función.*/

function adjuntarElementoPorId(id,etiqueta){
  
  var nuevoElement = document.createElement(etiqueta);
  elementoPorId(id).appendChild(nuevoElement);

}