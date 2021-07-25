// Crie uma função para verificar se um valor é Truthy
function checker(value) {
    return `o valor passado é ${!!value}`
}
console.log(checker(' '))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lados) {
    return lados * 4
}
console.log(perimetro(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, surname) {
    return `${name} ${surname}`
}
console.log(fullName('Matheus', 'Bezerra'))

// Crie uma função que verifica se um número é par
function isPar(value) {
    if (value % 2 === 0) {
        return `O valor ${value} é Par`
    } else if(value / 2 !== 0) {
        return `O valor ${value} é Ímpar`
    } else {
        return `O valor ${value} é Par`
    }
}
console.log(isPar(100))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function checkerArgument(argument) {
    return typeof argument
}
console.log(checkerArgument(function() {}))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
window.addEventListener('scroll', callback)
function callback() {
    console.log('Matheus Bezerra')
}


//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
console.log(precisoVisitar(20))
console.log(jaVisitei(20))