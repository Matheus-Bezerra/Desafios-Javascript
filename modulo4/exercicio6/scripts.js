const title = document.querySelector('h1')
title.innerText = 'Explicação sobre Event Bubble, abaixo:'
const paragraph = document.querySelector('p')
paragraph.innerText = ' O Event Bubbling ocorre quando um usuário interage com um elemento no HTML e o evento se propaga como bolha por todos os elementos aninhados a ele. Quando um evento "bubbling" é realizado sobre um determiando elemento, todos os acenstrais dele tambem serão acionados em ordem crescente de aninhamento até chegar no ultimo elemento, como se fosse um copo de refrigerante onde as bolhas burbulham do fundo do copo até o ponto mais alto.\n Temos um exemplo abaixo: Elemento pai, filho e neto, se clicar no neto, ação será vinculada a ele mas será disparado depois os eventos dos elementos acima dele tambem, no caso do elemento pai e filho, abra o seu console e realize essa experiência...'

const pai = document.querySelector('.pai')
const filho = document.querySelector('.filho')
const neto = document.querySelector('.neto')

pai.addEventListener('click', handleClick)
filho.addEventListener('click', handleClick)
neto.addEventListener('click', handleClick)
function handleClick() {
    console.log(this)
}