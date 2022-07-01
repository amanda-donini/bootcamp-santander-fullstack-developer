/* Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar) */

//Solucao 1
function verificaPalindromo(String) {
    if(!String) return "string inexistente"; /* Isso e para saber se a string existe. Se a string for diferente de true ela retorna, para verificar se ela e vazia, nula ou undefined*/

    return String.split("").reverse().join("") === String; /* o split, se voce nao passar nada para ele, ele vai separar todas as letras. O reverse vai reverter as letras da string. O join sem nada vai juntar as letras na string */
}

console.log(verificaPalindromo("gato"));

//soucao 2
// omo
// 012
// abba
// 0123

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) { /*o indice comeca no 0 e enquanto o indice for menor do que o tamanho da string, ele acrescenta um. Mas e dividido por 2 por que em cada um desses loops ele vai verificar 2 caracteres (o ultimo e o primeiro)*/
        if(string[i] !== string[string.length -1 - i]) {
            /*se o numero que eu tiver for diferente, eu vou retornar falso. Precisa ser legth - 1 porque como mostra o exemplo acima, omo tem length de 3, mas nao existe indice 3. 
        Precisa ser leght-1. O - i e porque ao chegar no indice 1 ele precisa comparar com o indice 2, e nao como o 3 (exemplo abba). Entao nesse caso o i vai ser 1, e 3 - 1 vai ser 2.*/
        return false;
        }
        

    }

    return true;
}

console.log(verificaPalindromo2("abba"));
