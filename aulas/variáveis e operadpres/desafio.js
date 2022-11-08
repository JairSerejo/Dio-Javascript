/* Faça um programa para caucular o gasto com um consumo de combustivel 
em uma viagem.

Você tera 5 variaveis. sendo elas:
1 - preço do Etanol;
2 - preço da Gasolina;
3 - tipo de combustivel que está no seu carro;
4 - gasto medio de combustivel do carro por km;
5  - distancia em km da viagem;

*/
const precoEtanol = 5.79;
const precogasolina = 6.60
const tipoDeCombustivel = 'Gasolina';
const kmPorLitros = 15;
const distanciaEmKm = 102;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel) === 'Etanol' {
    const valorGasto = litrosConsumidos * precoEtanol;
console.log(valorGasto.toFixed(2));
} else {
const valorGasto = litrosConsumidos * precogasolina;
console.log(valorGasto.toFixed(2));
}