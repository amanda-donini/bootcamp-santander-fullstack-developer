/* Sintaxe e Operadores
Este repositório contém a atividade prática do Curso "Sintaxe e Operadores", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

function comparaNumeros(num1 , num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

   /* if(saoIguais) {
        return "Sao iguais";
    }

    return "Nao sao iguais"; OU 

    return saoIguais ? "sao iguais" : "nao sao iguais"; 
} */

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'nao';
    }

    return `Os numeros ${num1} e ${num2} ${saoIguais} sao iguais.`
};

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma e ${soma}, que e ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(20, 20));