
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maioValrEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maioValrEncontrado) {
        maioValrEncontrado = numeroSorteado;
    }
    
}

print(maioValrEncontrado);