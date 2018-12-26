/* 1 - He desarrollado un programa que calcula el valor acomulado y valor util de un proyecto*/
      var elementos = new Array(3);
      function pedirValores(elementos){
        
        for(var i = 0; i< elementos.length; i++)
        {
          if(i == 0)
          {
          var e;
          e = prompt("escribe el valor del presupuesto total");
          elementos[i]= parseInt(e);
          }
          if(i == 1)
          {
          var e;
          e = prompt("escribe el porcentaje del proyecto terminado");
          elementos[i]= parseInt(e)/100;
          }
        
          if(i == 2)
          {
          var e;
          e = prompt("escribe el valor del presupuesto gastado hasta el momento");
          elementos[i]= parseInt(e);
          }
        }
        calValorAcomulado(elementos);
      }
     

      function calValorAcomulado(elementos){
     
       var presTotal = elementos[0];
       var porProyectoCompl = elementos[1];
       var valorAcomulado = presTotal*porProyectoCompl;
      
       return valorAcomulado;
       //document.write( "<h4> Valor Acomulado: </h4>"+valorAcomulado);
      }

      

      function calValorUtil(elementos){
        pedirValores(elementos);
        var presTotal = elementos[0];
        var valorAco = calValorAcomulado(elementos);
        var presParcialgastado = elementos[2];
        var valorUtil = (presParcialgastado/valorAco)*100;
        if(valorUtil>100){
        document.write("<h4> Valor Acomulado: </h4>"+ valorAco+" &euro; </br>"+ "<h4> Valor Util: </h4>"+ valorUtil+ "% </br> <h2>Lamentamos comunicarle que ha excedido su presupuesto total inicial de:</h2>"+presTotal +" &euro; en un porcentaje de "+valorUtil+"%");
        }
        else{
          if(valorUtil > 50){
          document.write("<h4> Valor Acomulado: </h4>"+ valorAco+" &euro; </br>"+ "<h4> Valor Util: </h4>"+ valorUtil+ "% </br> <h2>Enhorabuena sus gastos siguen dentro del presupuesto total inicial de:</h2>"+presTotal+" &euro;");
          }
          if(valorUtil < 50){
          document.write("<h4> Valor Acomulado: </h4>"+ valorAco+" &euro; </br>"+ "<h4> Valor Util: </h4>"+ valorUtil+ "% </br> <h2> ¡Increible¡  Ha conseguido un gasto del</h2>" + valorUtil+"% </br><h2>sobre el presupuesto total inicial de:</h2>"+presTotal+" &euro;");
          }

        }
      }
      calValorUtil(elementos);

      

      