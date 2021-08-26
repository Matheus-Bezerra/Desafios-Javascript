//acesse elemento nome e email do formulario pelo Javascript
const contato = document.querySelector('#contato')
console.log(contato.elements.nome)
console.log(contato.elements.email)

//Mostre uma mensagem de erro pelo Js se o usuário não preencher corretamente os dados do email e altere o estilo do seu input!
const texto = document.querySelector('.texto')

contato.addEventListener('change', handleKeyup)
function handleKeyup(event) {
    const target = event.target
    if(!target.checkValidity()) {
        target.classList.add('invalido')
        target.setCustomValidity('Esse campo é super importante e precisa ser preenchido corretamente!')
        target.nextElementSibling.innerText = target.validationMessage
    }
    texto.innerText = 'dados: ' +  event.target.value
}

//ao Alterar a cor nas opções ou no input de color, altere de acordo com o valor passado o fundo do body!
contato.addEventListener('change', handleKeyUpSecondary)

function handleKeyUpSecondary(event) {
    document.body.style.backgroundColor = event.target.value
}
