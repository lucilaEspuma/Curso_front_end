
    //1 Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.
    //2 Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.
    //3 Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos.
    //4 Elaborar una función que reciba tres enteros y retorne el promedio.
  // Me he quedado aquí https://www.tutorialesprogramacionya.com/javascriptya/temarios/descripcion.php?inicio=10&cod=18
    
//1
function devuelveMenor(num1, num2, num3){ 
if (num1 > num2 && num1> num3){//num1 es el mayor
  //document.write("Num mayor=" + num1 + "<br/>");
  return num1;
}


if (num2 > num1 && num2> num3){ //num2 es el mayor
  //document.write("Num mayor=" + num2 + "<br/>");
  return num2;
}
if (num3 > num2 && num3> num1) { //num3 es el mayor
  //document.write("Num mayor=" + num3 + "<br/>");
  return num3;
}
}
devuelveMenor(10,11,35);

//2
function devuelvePerimetroCuadrado(lad1){
  var perimetro;
  perimetro=lad1*4;
  document.write(lad1);
  //return lad1*4;
}
devuelvePerimetroCuadrado(4);

//5 Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function pide4ValYsuma (){
  var valor;
  var suma;
  for(var i=0; i<5; i++){
    valor= prompt("por favor introduce un número");
    valor= parseInt(valor);
    suma = suma+valor;


  }

}


