//1 Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
//2Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.
// Estos dos ejercicios ya están terminados, el curso continua aqui: funciones que retornal un valor>> problemas https://www.tutorialesprogramacionya.com/javascriptya/problemas/problema.php?cod=17&inicio=10  

function muestraMenor(num1, num2, num3){ //no entiendo muy bien la lógica de cómo encuentra el número menor
var array3Num = new Array(num1,num2, num3);
var numMenor = array3Num[0];
var segNumMenor = array3Num[0];
var terNumMenor = array3Num[0];
var posMenor;
var posSegMenor;
for(var i= 0; i< array3Num.length; i++){
  if(numMenor > array3Num[i]){
    numMenor= array3Num[i];
    posMenor=i;
  }
}



for(var i = 0; i< array3Num.length; i++){
  if (posMenor != i) {
    if (segNumMenor >= array3Num[i]){
      segNumMenor = array3Num[i];
      posSegMenor = i;
    }
    
  }
  
}
for(var i = 0; i < array3Num.length; i++){

  if(posMenor != i && posSegMenor != i){
    if (terNumMenor >= array3Num[i]){
    terNumMenor = array3Num[i];
    }
    else{
      terNumMenor = array3Num[i];
    }
}
}
/*return terNumMenor; //soulucion ejercicio 1 de funciones que devuelven un valor, simplemente hay que añadir el comando return y que nos devuelva el número mas alto.*/
document.write("Nº 1=" + numMenor + "<br/>"+"Nº 2=" + segNumMenor + "<br/>"+"Nº 3=" + terNumMenor + "<br/>");
     
}
muestraMenor(19,11,35);

