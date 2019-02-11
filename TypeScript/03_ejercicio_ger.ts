//EJERCICIO:
//1-Poner público lo público y privado lo privado.
//2-Terminar de heredar libro con metodos de acceso.
//3-Usarlos e instanciarlos abajo.
//4- Validar datos: Precios nunca pueden ser negativos (setPrecio), y no puede haber nombres, tallas títulos... vacíos.

interface IProducto {
  // no se recomienda poner propiedades en las interfaces solo los metodos
  //precio: number;
  mostrar(): void;
}
class Producto implements IProducto {//la clase producto tiene las propiedades de nombre y precio, y los metodos mostrar y metodos de acceso a las propiedades privadas.
  //las interfaces no pueden usar propiedades privadas.
  private precio: number; //campo obligatorio
  private nombre: string;
  public constructor(pre: number, nom: string) {
    this.precio = pre;
    this.nombre = nom;
  }
  public mostrar() {
    console.log(`producto: ${this.nombre}, precio: ${this.precio}`);
  } //metodo Obligatorio

  //Métodos de acceso, seters y geters
  //Precio es de lectura y escritura
  public getPrecio(): number {
    return this.precio;
  }
  public setPrecio(nuevoPrecio: number): void {
    if (nuevoPrecio > 0) {
      this.precio = nuevoPrecio;
    } else {
      console.log("pedir precio");
    }
  }
  //Nombre es solo de lectura
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nuevoNombre: string): void {
    if (nuevoNombre != null || nuevoNombre != " ") {
      console.log(" nombre tiene que ser un string")
  }
    else{
      this.nombre = nuevoNombre;
    }
}

class Camiseta extends Producto {
  private talla: string;
  private color: string;
  public constructor(tal: string, pre: number, col: string) {
    super(pre, "camiseta");
    this.talla = tal;
    //this.precio = pre; //MAl, precio es privado
    //this.setPrecio(pre); // llamando al metodo de aceso se puede acceder a precio, pero no es necesario por que el precio le estamos llamando en el constructor.
    this.color = col;
  }
  mostrar() {
    console.log("Camiseta Info: " + this.getPrecio()); //para mostrar el precio accedemos al metodo getprecio
    console.log("Talla: " + this.talla);
    console.log("Color: " + this.color);
  } 
}

class Libro extends Producto {
  // para definir las variables en el constructor de la clase directamente se usa metodo: public/private

  constructor(precio: number, titulo: string) {
    super(precio, titulo);
  }
  mostrar() {
    console.log("Info Libro:" + this.getPrecio());
    console.log("Titulo: " + this.getNombre());
  }
}
let miLibro: Libro = new Libro(900, "Mi jodido Libro");
miLibro.mostrar();

let miCamiseta: Camiseta = new Camiseta("XXL", 17, "Arcoiris");
miCamiseta.mostrar();

let algunProducto: IProducto;
algunProducto = new Camiseta("S", 20, "Arcoiris");
algunProducto.mostrar();

let tipo: string = "cam";

if (tipo == "cam") {
  let T: string; //declaro varibles que almacenan los datos de la BD-
  let P: number;
  let C: string;
  let suCamiseta: Camiseta = new Camiseta(T, P, C);
  suCamiseta.mostrar();
} else if (tipo == "lib") {
  miLibro.mostrar();
}
