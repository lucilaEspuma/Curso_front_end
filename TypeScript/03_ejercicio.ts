interface IProducto {
  precio: number;
  mostrar();
}

class Camiseta implements IProducto {
  talla: string;
  color: string;
  precio: number;
  constructor(talla: string, precio: number) {
    this.talla = talla;
    this.precio = precio;
  }
  mostrar() {
    console.log(this.talla);
    console.log(this.precio);
    console.log(this.color);
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
