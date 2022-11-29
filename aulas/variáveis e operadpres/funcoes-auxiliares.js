
const entradas [10, 23, 33, 56, 7, 15, 98,];
let i = 0;

function gets () {
    const valor = entradas [i];
    i++;
    return valor;
}

function print (texto) {
    console.log(texto);
}

module.exports = { gets, print };
