// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('click', handleClick)
    function handleClick(event) {
        link.classList.toggle('ativo')
        event.preventDefault()
    }
})
console.log(links)
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elements = document.querySelector('html')
elements.addEventListener('click', callback)
function callback(event) {
    console.log(event.target)
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
elements.addEventListener('click', removeElement)
function removeElement(event) {
    event.target.remove()
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const body = document.querySelector('body')
elements.addEventListener('keydown', chnageElement)
function chnageElement(event) {
    if(event.key == 't') {
        elements.classList.toggle('ativo')
    }
}