var Camiseta = /** @class */ (function () {
    function Camiseta(talla, precio, color) {
        this.talla = talla;
        this.precio = precio;
        this.color = color;
    }
    Camiseta.prototype.mostrar = function () {
        console.log(this.talla);
        console.log(this.precio);
        console.log(this.color);
    };
    return Camiseta;
}());
var Libro = /** @class */ (function () {
    // para definir las variables en el constructor de la clase directamente se usa metodo: public/private
    function Libro(precio, titulo) {
        this.precio = precio;
        this.titulo = titulo;
    }
    Libro.prototype.mostrar = function () {
        console.log("Info Libro:" + this.precio);
        console.log("Titulo: " + this.titulo);
    };
    return Libro;
}());
var miLibro = new Libro(900, "Mi jodido Libro");
miLibro.mostrar();
var miCamiseta = new Camiseta("XXL", 17, "Arcoiris");
miCamiseta.mostrar();
var algunProducto;
algunProducto = new Camiseta("S", 20, "Arcoiris");
algunProducto.mostrar();
