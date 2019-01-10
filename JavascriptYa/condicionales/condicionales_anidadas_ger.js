
    //1Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. 

    function funNumCifras(){
      var inputNum = document.getElementById("inputNum");
      var valorNum = parseInt(inputNum.value);
      
      var divMensaje = document.getElementById("divMensaje");
      
      //var nodeResult = document.createTextNode("Numero "+valorNum);
      //divMensaje.appendChild(nodeResult);
      //divMensaje.childNode[0]= "Numero "+valorNum;
      //divMensaje.innerHTML="Numero " + valorNum;
      if(valorNum < 0 || valorNum > 999){
        divMensaje.innerHTML="error introduzc numero positivo o menor de 1000";  
      }
      else{
      if(valorNum < 10){
        divMensaje.innerHTML="1 cifra";
      }
      else if( valorNum < 100){
        divMensaje.innerHTML="2 cifra";
      }
      else{
        divMensaje.innerHTML="3 cifra";
      }

      }
    }


    function funNumCaracteres(){
      var inputNum = document.getElementById("inputNum");
      var valorNum = parseInt(inputNum.value);
      
      var divMensaje = document.getElementById("divMensaje");
      var valorNumEnTexto = "" + valorNum;
     //el else reconoce los caracteres vacios del string como un valor numerico que es NaN, al convertir nuestro valNum (string) a valNum(numero)
      if(valorNum < 0 || valorNum > 999 || isNaN(valorNum)){
        divMensaje.innerHTML="error introduzc numero positivo o menor de 1000";   
      }
      else{

      
       
          divMensaje.innerHTML="</br>"+valorNumEnTexto.length+"cifras";
       
        }

      
    }
