
   let valor1=prompt('Digite o primero valor:');
   let valor2=prompt('Digite o segunda valor:');
   let valor3=prompt('Digite o terceiro valor:');

      valor1 = parseFloat(valor1);
      valor2 = parseFloat(valor2);
      valor3 = parseFloat(valor3);

      let maior=valor1;
      if (valor2 > maior) {
        maior = valor2;
      }else if(valor3 > maior){
        maior = valor3;
      }
      alert('Valor maior= '+ maior);
