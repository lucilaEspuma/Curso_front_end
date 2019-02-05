//declarando una variabel numero
var unNumero;
console.log("un numero " + unNumero);
var unTexto = "un texto";
console.log(unTexto);
alert(unTexto);
//declarando una variable booleana y usandola en la condicion de un if
var siOno;
siOno = true;
if (siOno) {
    console.log("pues parece que si");
}
//UNiones en typescript, tipos de datos que podrían ser uno u otro, no se recomiend hacer esto.
var miUnion;
miUnion = "Puede ser cadena";
miUnion = 345;
miUnion = unTexto == "Un texto" && unNumero == 12;
var miCumple = {
    dia: 7,
    mes: 10,
    anio: 1982,
    minutos: 10
};
console.log("cumpor años el " + miCumple.dia + "del" + miCumple.mes);