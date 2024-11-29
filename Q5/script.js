let numero1 = prompt('Digite o seu primeiro número: ')
let numero2 = prompt('Digite o seu segundo número: ')

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

    alert("Primeiro número: " + numero1);
    alert("Segundo número: " + numero2);

console.log('Antes da troca: ' + numero1 + ',' + numero2);

let troca = numero1;
numero1 = numero2;
numero2 = troca;

alert('Pronto, agora exiba seus números trocados: ');
    alert("Primeiro número: " + numero1);
    alert("Segundo número: " + numero2);

console.log('Depois da troca: ' + numero1 + ',' + numero2);

