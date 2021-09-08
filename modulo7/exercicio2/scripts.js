//Exercicios

//1) Crie um objeto com factory expression sem precisar da palavra new
function createButton(text) {
    function element() {
        const btnElement = document.createElement('button')
        btnElement.innerText = text
        return btnElement
    }
    return {
        element,
        text,
    }
}

const comprarBtn = createButton('comprar')
console.log(comprarBtn)
console.log(comprarBtn.element())
