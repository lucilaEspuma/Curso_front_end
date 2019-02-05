interface IProducto {
  precio: number;
  mostrar();
}

let ejemploAny: any;
ejemploAny = 10;
ejemploAny = "uuu";
ejemploAny = true;

function dimeOsiOno(): boolean {
  let devolucion = true;
  if (devolucion) {
    return true;
  } else {
    return false;
  }
}
function dameLoQueTuQuieras(): any {
  let valor: any = 3;
  switch (valor) {
    case 1:
      return 1000;
      break;
    case 2:
      return "1000";
      break;
    case 3:
      return false;
      break;
  }
}
function noMeDesNadaDeNada(): void {
  if (true) return; //no podemos devolver nada
}
