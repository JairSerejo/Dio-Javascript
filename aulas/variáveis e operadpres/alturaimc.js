/*
Formula do IMC
IMC = Peso / ( Altura * Altura)

Elabore um algorimo que dado o peso e altura de um adulto mostre a sua
condição de acordo com a tabela abaixo.

IMC Adulto e condições:
- Abaixo de 18.5 - abaixo do peso;
- De 18.5 até 25 - peso ideal;
- Entre 25 à 30 - acima do peso;
- Entre 30 e 40 - obeso;
- Acima de 40 - obesidade grave;
*/

const peso = 78
const altura = 1.70
const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2));

if (imc <18.5) {
    console.log ('abaixo do peso');
} else if (imc >=18.5 && imc <=25) {
    console.log ('peso ideal');
} else if (imc >25 && imc <=30) {
    console.log ('acima do peso');
} else {
    console.log ('obesidade grave');
}
