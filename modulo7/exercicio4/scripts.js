//Exercicios



// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles
console.log(backgroundColor)
console.log(color)
console.log(margin)
console.log('\n')

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoAtivo)
console.log(cursoInativo)
console.log('\n')


// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {bobCor: cor} = cachorro;


//Resposta certa:
const {cor: bobCor} = cachorro
console.log(bobCor) //da resposta certa
console.log(cor) // do errado