// nomeie 3 propriedades ou métodos de strings
const name = 'Matheus'
console.log(name.slice(2))
console.log(name.split(', '))
console.log(name.replace('Mathe', 'Tete').slice(0, -1))

// nomeie 5 propriedades ou métodos de elementos do DOM
const Dom = document.querySelector('li')
console.log(Dom.offsetTop)
Dom.innerHTML = 'Olá'
Dom.outerHTML = 'Estamos Manipulando pelo Dom o HTML'
Dom.addEventListener('click', function() {
    return 'Olá Mundo!'
})
console.log(Dom.offsetWidth)

// busque na web um objeto (método) capaz de interagir com o clip
// clipboard é a parte do seu computador que lida com o CTRL + C

// Resposta -> API Clipboard Js Biblioteca de Js!!!