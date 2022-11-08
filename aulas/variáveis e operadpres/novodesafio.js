/*
Faça um algoritimo que dado as as 3 notas tiradas por um aluno em um
semestre da faculdade calcule e imprima a sua media e a sua classificação
conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Media menor que 5, reprovado;
- Media entre 5 e 7, recuperação;
- Media acima de 7, aprovado;
*/

const nota1 = 5;
const nota2 = 7;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3
console.log (media);

    if (media <5) {
        console.log ('reprovado');
    } else if (media >=5 && media <=7) {
        console.log ('recuperação');
    } else {
        console.log ('aprovado');
    }