
   function ejecutarJavaScript(){
     var inputJS = document.getElementById("codJS");
     var inputTimes = document.getElementById("times");
     var inputTimesVal= inputTimes.value;
     eval("for (var I_95= 0; i_95 < "+inputTimesVal+";I_95 ++) {" + inputJS.value+ "}"); //esta funcion construye código java script dianámico que se puede modificar y ejecutar por parte del usuario.
     


     
   }
   function noSeQuePatxara(){
   var inputJS = document.getElementById("codJS");
    alert(escape(inputJS.value));
   }

   function codificarASCII(){
    var inputJS = document.getElementById("codJS");
    var enc = encodeURI(inputJS.value);
    var dec = decodeURI(enc);
    alert(enc+"/"+dec);
   }