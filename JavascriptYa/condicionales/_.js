
    //1Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. 

    function cifras(){
      var numeroInput = document.getElementById("numero");
      var numeroValor = numeroInput.value;
      //si tiene 1 cifra
      if(numeroValor <= 9 ){
        document.write("Tu numero tiene 1 cifra "+ numeroValor);

      }
      else{
      //si tiene 2 cifras
      if (numeroValor <= 99){
        document.write("Tu numero tiene 2 cifras "+numeroValor);
      }
      else{
        if(numeroValor <= 999){
          document.write("Tu numero tiene 3 cifras "+ numeroValor);
        }
      }

    }

    }
    
    function cifrasCaracteres(){
      var numeroInput = document.getElementById("numero");
      var numeroValor = numeroInput.length;
      //si tiene 1 cifra
      if(numeroValor == 1 ){
        document.write("Tu numero tiene 1 cifra "+ numeroValor);

      }
      else{
      //si tiene 2 cifras
      if (numeroValor == 2){
        document.write("Tu numero tiene 2 cifras "+numeroValor);
      }
      else{
        if(numeroValor == 3){
          document.write("Tu numero tiene 3 cifras "+ numeroValor);
        }
      }

    }

    }
  
