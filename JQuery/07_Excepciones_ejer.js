

  function botonPulsado(){
    var x;
    x= $("#demo").val();
    $("#p01").html("");
    
try{
 // throw new Error("provocando un error ");
if(x == ""){
  throw new Error("esta vacío");
  }
if (isNaN(x)){
  throw new Error( "no es un número"); 

 }
 x= Number(x);
if(x <5 || x > 10 ){
  throw new Error( "está fuera de rango");

  }

} catch(elError){ 
  
  $("#p01").html("El texto "+ elError.message);

} 
}
