/* Faça um programa para caucular o gasto com um consumo de combustivel 
em uma viagem.

Você tera 3 variaveis. sendo elas:
1 - preço do combustivel;
2 - gasto medio de combustivel do carro por km;
3  - distancia em km da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 1500;
const distanciaEmKm = 102;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);
