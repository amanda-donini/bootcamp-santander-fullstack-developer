// Atividade 1: Alunos Aprovados
// Crie uma função que recebe o array alunos e um número que irá representar a média final;
// Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

const alunos = [
    {
        nome: `Joao`,
        nota: 5,
        turma: `1B`,
    },
    {
        nome: `Sofia`,
        nota: 9,
        turma: `1B`,
    },
    {
        nome: `Paulo`,
        nota: 6,
        turma: `2C`,
    },
    {
        nome: `Miguel`,
        nota: 3,
        turma: `2C`,
    },
];
function alunosAprovados(array, media) {
    let Aprovados = [];

    for(let i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media){
            Aprovados.push(nome);
        }
    }

    return Aprovados;
}

console.log(alunosAprovados(alunos, 5));