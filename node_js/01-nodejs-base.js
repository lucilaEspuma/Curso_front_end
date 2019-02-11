"use strict";
//nodejs.org toda la documentaion de nodejs

let variable = 3434;
console.log("var " + variable);
listar();

function listar() {
  for (let i = 0; i < process.argv.length; i++) { // process.argv procesa argumentos desde la consola de node. permite el input de datos dinámico.
    console.log("parametro " + i + "-" + process.argv[i]);
  }
}
console.log(process.cpuUsage());
console.log(process.cwd()); // Equivale cd
process.chdir("../"); //equival a ..cd para volver atrás en el directorio