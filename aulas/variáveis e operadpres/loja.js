/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando
o preço normal da etiqueta e a escolha da condição de pagamento.
Ultilize os códigos da tabela à seguir para ler qual a condição de pagamento
escoçhida e efetuar o cauculo adequado.

Códigos de condições de pagamentos:
1 - À vista débito, recebe 10% de desconto;
2 - À vista no dinheiro ou pix, recebe 15% de desconto;
3 - Parcelado em 2 vezes, preço normal da etiqueta;
4 - Parcelamento acima de 2 vezes, preço da etiqueta mais 10% de juros
*/

const etiqueta = 200;
const pagamento = 1;
if (pagamento === 1) {
    console.log (etiqueta - (etiqueta * 0.1));
} else if (pagamento ===2) {
    console.log (etiqueta - (etiqueta * 0.15));
} else if (pagamento === 3) {
    console.log (etiqueta)
} else {
    console.log ((etiqueta * 0.1) + etiqueta);
}


