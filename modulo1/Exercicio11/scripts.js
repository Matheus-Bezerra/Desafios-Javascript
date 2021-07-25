// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
//console.log(var, marca, portas); 
// Resposta -> Por que let e const não é global, e tambem se chama a variavel pelo nome e não pelo tipo dela!


// Como corrigir o erro abaixo?
    const dois = 2;
   function somarDois(x) {
    return x + dois;
   }
   function dividirDois(x) {
    return x + dois;
   }
   somarDois(4);
   dividirDois(6);
//Solução -> coloquei o cosnt fora da função para poder ser acessada no escopo da função, por que se tivesse dentro de uma, ela não vaza para fora do bloco da função!

console.log('\n\n')
// O que fazer para total retornar 500?
var numero = 50;
for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}
const total = 10 * numero;
console.log(total)
// Resposta --> O var como ele é global e estava antes do for ele estava entrando no for e alterando o seu valor por que ele é do tipo Global, então troquei no for o var por let, assim a variavel let ela não vaza pra fora e não altera o valor do var numero!
