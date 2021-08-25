const title = document.querySelector('h1')
const explanation = document.querySelector('p')
console.log(title)
console.log(explanation)

title.innerText = 'Explicação de como fazer um Menu Mobile:'
explanation.innerText = 'Selecione o Menu Hamburger dentro do Header e selecione tambem a div que pega toda a sua lista(header), então adicione o evento de click para o menu Hamburguer e no seu callback basta pegar em um array as classes da div selecionada da lista e então verifique se cada item da array te a classe a active(find), se tiver ele vai remover se não vai adicionar'

const subtitle = document.createElement('h2')
const body = document.querySelector('body')

subtitle.innerText = 'Desafio Realizado com sucesso no Projeto!'

body.appendChild(subtitle, explanation)