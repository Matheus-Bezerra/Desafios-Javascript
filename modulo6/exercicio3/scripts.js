//Exercicios

//Crie uma classe carro e uma subClasse de moto e passe a propriedade rodas para Moto e o método acelerar!
//A subclasse deve ter acesso aos métodos e propriedades tambem do Carro

class Carro {
    constructor(rodas, combustivel) {
        this.rodas = rodas
        this.combustivel = combustivel
    }
    acelerar() {
        console.log('Velcidade até 100km')
    }
}

class Moto extends Carro {
    constructor(rodas, combustivel, capacete) {
        super(rodas)
        this.combustivel = combustivel
        this.capacete = capacete
    }
    acelerar() {
        super.acelerar()
        console.log('Velocidade até 120km')
    }
    empinar() {
        console.log('Moto empinou com as ' + this.rodas + ' rodas')
    }
}

//Crie uma variavel com caracteristicas da Kawasaki(moto) e mostre usando a subclasse
const kawasaki = new Moto(2, 8, true)
console.log(kawasaki)
kawasaki.acelerar() //ele ativa os dois como já tem um método com o mesmo nome
kawasaki.empinar()
console.log('\n')

//Crie uma variavel com caracteristicas de bmw(Carro) e mostre somente usando a classe
const bmw = new Carro(4, 10)
console.log(bmw)
bmw.acelerar()
