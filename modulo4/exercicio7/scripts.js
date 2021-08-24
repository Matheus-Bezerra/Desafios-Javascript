const title = document.querySelector('h1')
const explanation = document.querySelector('p')

title.innerText = 'Clicoutside, realize no projeto final e explique a baixo como funciona:'
explanation.innerText = ' Irá melhorar o exercício 5(Dropdown-Menu) pois na função de handleClick, passe uma nova função com o this e no segundo valor do parâmetro terá uma função callback que vai remover a classe do this.active, crie uma função fora outsideClick e chame o html e verifique se o elemento tem o atributo data-outside e se não tiver o html vai ter um evento de click e de callback a função handleOutsideClick, tambem coloque um atributo no element que é o data-outside sem valor mesmo.\n Adicione uma nova função handleOutsideClick onde vai verificar se o elemento não é o event.target(this), se não for ele remove o atributo data-outside e remove o evento no html de click'
const subtitle = document.createElement('h2')
subtitle.innerText = 'Desafio Realizado no projeto Final'
const body = document.querySelector('body')
body.appendChild(subtitle, explanation)