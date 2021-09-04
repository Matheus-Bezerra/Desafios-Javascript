//Exercicios - Get e Set
//1) //crie um objeto sem usar métodos do Object e faça com que não dê para modificar o valor do seu método

const formula = {
    get PI() {
        return 3.14
    }
}

formula.PI = 10.9 // nada aconteçe por conta do get
console.log(formula.PI)

//2) //Crie um objeto fruta e crie uma lista sozinha, portanto use o método set para adicionar novas frutas a esta lista

const frutas = {
    lista: [],
    set novaFruta(fruta) {
        this.lista.push(fruta)
    }
}

frutas.novaFruta = 'banana'
frutas.novaFruta = 'Maça'
frutas.novaFruta = 'Melão'
frutas.novaFruta = 'Abacate'
frutas.novaFruta = 'Laranja Lima'
console.log(frutas.lista)

//3) //Crie um estilo de botão e use get para segurança de código

class Button {
    constructor(text, background) {
        this.text = text
        this.background = background
    }
    get element() {
        const btnElement = document.createElement('button')
        btnElement.innerText = this.text
        btnElement.style.backgroundColor = this.background
        return btnElement
    }
    set element(type) {
        this._elementType = type
    }
}

const yellowButton = new Button('Visite aqui', 'yellow')
console.log(yellowButton)
console.log(yellowButton.element)


//4) //Crie uma variavel privada com o método set
console.log(yellowButton.element)
//Foi criada na classe acima a variavel privada!!
