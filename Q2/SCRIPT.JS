    nota1 =   prompt ("Digite sua primeira nota: ") ;
    nota2 =  prompt  ("Digite sua segunda nota: ");

    nota1=parseInt(nota1);
    nota2=parseInt(nota2);

    let soma = ((nota1 + nota2)/2);

    if(soma == 10){
        alert("Aprovado com distinção!!")
    }
    if(soma>=7){
        alert("Aprovado!!")
    }else{
        alert("Reprovado!!")
    }
   
        