interface IProducto {
  precio: number;
  mostrar();
}

class Camiseta implements IProducto {
  talla: number;
  //color: number;
  precio: number;
  constructor(talla: number) {
    this.talla = talla;
    this.color = color;
  }
  mostrar() {
    console.log(this.talla);
  }
}
class Libro implements IProducto {
  titulo: string;
  precio: number;
  constructor(titulo) {
    this.titulo = titulo;
  }
  mostrar() {
    console.log(this.titulo);
  }
}
let prod: IProducto;
prod = new Camiseta(38);
prod = new Libro("El Caso B");

//prod = new Camiseta(10, 255);
console.log("¿Quiere comprar camiseta o libro?");
let camiseta: string = "C"; //esto seria lo que introduce el usuario
let libro: string = "L"; //esto seria lo que introduce

//camiseta o libro
if (camiseta == "C") {
  prod.mostrar();
}
if (libro == "L") {
  prod.mostrar();
}

//
