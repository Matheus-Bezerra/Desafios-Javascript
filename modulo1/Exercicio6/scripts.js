// Crie uma função que verifique
// corretamente o tipo de dado
function checkerdice(dice) {    
    return typeof dice
}
console.log(checkerdice('oi'))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
    perimetro(lados) {
        return lados * 4
    }
}
console.log(quadrado.perimetro(3))

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
  configuracao.color = '#111'
  console.log(configuracao)
  console.log(configuracao.color)

  