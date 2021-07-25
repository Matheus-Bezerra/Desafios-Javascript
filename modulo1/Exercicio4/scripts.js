// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let ageMy = 18
let ageRelative = 20
if(ageMy > ageRelative) {
    console.log(`Minha idade ${ageMy} anos é maior do que a do meu parente com idade de ${ageRelative} anos`)
} else if(ageMy < ageRelative) {
    console.log(`A idade do meu parente que é ${ageRelative} anos é maior que a minha com ${ageMy} anos`)
} else {
    console.log(`Eu e meu parente Temos idades iguais --> ${ageMy}`)
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // Verdadeiro -> 3
console.log(expressao)
console.log(!!expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
    console.log('Brasil é maior que China')
} else {
    console.log('China é maior que Brasil')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //Falso F ^ V === F
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Cão ultimo valor -> F ou V === V
} else {
  console.log('Falso');
}