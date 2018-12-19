var miClase= document.getElementsByClassName("pelota"); //si hay mas de un elemento usando la misma clase javascript lo interpreta como un array

for( var i= 0; i< miClase.length; i++){

miClase[i].style.webkitAnimationPlayState="paused";
}

var divMarco= document.getElementsByClassName("marco")[0];
var boton = divMarco.appendChild(document.createElement("input"));
boton.setAttribute("type","button");
boton.setAttribute("value","¡pero animate!");
function cuandoSePulsaBoton(){
  
  for( var i= 0; i< miClase.length; i++){

    miClase[i].style.webkitAnimationPlayState="running";
    }
}
/*cuandoSePulsaBoton();*/ //esta linea solo hace activarse la funcion y la pelota empieza a moverse.
boton.setAttribute("onclick", "cuandoSePulsaBoton();"); //aqui le estamos asignando a nuestra funcion el atributo de onclick para que al clicar en el boton nuestra funcion (a la que llamamos en el argumento de setAttribute), se active y haga nuestra animación funcionar.
