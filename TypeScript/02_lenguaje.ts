//declarando una variabel numero
let unNumero: number;

console.log("un numero " + unNumero);

var unTexto = "un texto";
console.log(unTexto);

alert(unTexto);

//declarando una variable booleana y usandola en la condicion de un if
let siOno: boolean;
siOno = true;
if (siOno) {
  console.log("pues parece que si");
}

//UNiones en typescript, tipos de datos que podrían ser uno u otro, no se recomiend hacer esto.
let miUnion: number | string | boolean;
miUnion = "Puede ser cadena";
miUnion = 345;
miUnion = unTexto == "Un texto" && unNumero == 12;

//el sistema de eventos en angular va mediante interfaces. Una interfaz es una manera de definir objetos con unas propiedas delimitadas, para que cuando los usemos en JavaScript no se puedan añadir propiedades de mar, esto permite tener un mayor control sobre tu código.

interface Tiempo {
  dia: number;
  mes: number;
  anio: number;
  mostrar();
}
var miCumple: Tiempo = { dia: 7, mes: 10, anio: 1982 };
console.log("cumpor años el " + miCumple.dia + "del" + miCumple.mes);

//Cuando usamos interfaces nos ahorramos usar varias dependencias entre clases
class Cumpleanios implements Tiempo {
  dia: number;
  mes: number;
  anio: number;
  mostrar() {
    console.log("CUmpleaños feliz! Hoy" + this.dia + "del" + this.mes);
  }
}
