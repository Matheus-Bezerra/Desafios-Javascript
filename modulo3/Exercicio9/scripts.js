// Crie uma função que verifique
// corretamente o tipo de dado
function verificator(date) {
    return typeof date
}
console.log(verificator({}))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const square = {
    sides: 4
}
Object.freeze(square) // It´s Frozen
square.sides = 6
console.log(square)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }

Object.defineProperties(configuracao, {
    'width': {
        writable: false
    },
    'height': {
        writable: false
    },
    'background': {
        writable: false
    }
  })
configuracao.width = '1000'
console.log(configuracao)


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
  
const arrayPropertiesNames = Object.getOwnPropertyNames(Array.prototype)
const stringPropertiesNames = Object.getOwnPropertyNames(String.prototype)
console.log(arrayPropertiesNames)
console.log(stringPropertiesNames)
