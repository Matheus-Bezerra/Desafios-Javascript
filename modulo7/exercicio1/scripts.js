//Exercicios

//1) Transforme a function declaration em expression

//Function Declaration
/*function somar(a,b) {
    return a + b
}*/

//Resposta -> function expression
const somar = (a,b) => {
    return a + b
}

console.log(somar(4,5))

//2) Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

//Resposta -> era por causa do Hoisting, funções expressadas do tipo const ainda tem o sistema de hoisting de uma variável, ou seja não podia chamar ela antes da funtion expression!

//3) Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function() {
    let nome = 'Matheus';
})

