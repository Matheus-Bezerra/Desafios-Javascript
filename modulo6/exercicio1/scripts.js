//Exercicios
//1) Tranforme a função construtora em Classes

//função construtora e protótipa!
/*function Button(text, background) {
    this.text = text
    this.background = background
}

Button.prototype.element = function()  {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.backgroundColor = this.background
    return buttonElement
}
*/
class Button {
    constructor(text, background) {
        this.text = text
        this.background = background
    }
    element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = this.text
        buttonElement.style.backgroundColor = this.background
        return buttonElement
    }
    appendElementTo(target) {
        const targetElement = document.querySelector(target)
        targetElement.appendChild(this.element())
        return this.element()
    }
}

const btn = new Button('clique em min', 'blue')
console.log(btn)
console.log(btn.element())

//2) Crie um método no objeto para inserir o button em algum elemento html que inserir como parâmetro

//Foi criado o método appendElementTo
console.log(btn.appendElementTo('body'))

console.log('\n')
//3) Crie uma classe que tenha uma propriedade que receba outro objeto dentro

class OptionsButton {
    constructor(options) {
        this.options = options
    }
}

const optionsRed = {
    backgroundColor: 'red',
    color: 'black',
    text: 'Clique em min',
    borderRadius: '5px'
}

const redButton = new OptionsButton(optionsRed)

console.log(redButton.options)

console.log('\n')
//4) Crie uma classe que tenha um método diretamente nele e não no seu protótipo

class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }
    static acelerar() {
        return `O carro acelerou 120Km!`
    }
}

const bmw = new Carro('Bmw', 'Bmw 320I')
console.log(bmw)
const audi = Carro.acelerar()
console.log(audi)

console.log('\n')
//5) faça um input usar as propriedades e métodos pela classe criada
class Input {
    constructor(value, background) {
        this.value = value
        this.background = background
    }
    element() {
        const inputElement = document.createElement('input')
        inputElement.innerText = this.value
        inputElement.style.backgroundColor = this.background
        return inputElement
    }
    static inputRedPurshase(value) {
        return new Input(value, 'red')
    }
}

const inputRed = Input.inputRedPurshase('Comprar')
console.log(inputRed)
console.log(inputRed.element())