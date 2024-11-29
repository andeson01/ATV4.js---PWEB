    let valor1 = parseInt(prompt("Digite o primeiro número:"));
    let valor2 = parseInt(prompt("Digite o segundo número:"));
    let valor3 = parseInt(prompt("Digite o terceiro número:"));

  console.log('Os seus valores são: ' + valor1, valor2, valor3);

   let maior= valor1;
  
   if (valor2 > maior) {
     maior = valor2;
   } if(valor3 > maior){
     maior = valor3;
}
    let menor = valor1;
  
    if(valor2 < menor){
        menor = valor2;
    } if (valor3 < menor){
        menor = valor3;
    }

   alert('Valor maior: '+ maior);
   alert('Valor menor: ' + menor);
   
   console.log('Valor maior: ' + maior);
   console.log('Valor menor: ' + menor);
