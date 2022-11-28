

const notas = []

notas.push (5);
notas.push (7);
notas.push (6);
notas.push (8);
notas.push (6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const notas = notas[i];
    soma = soma + notas;
}

const media = soma / notas.length;
console.log(media);