//Crie um Objeto com os seus dados Pessoais
//Deve possuir pelio menos duas proprieadades
var personal = {
    name: 'Matheus',
    surname: 'Bezerra',
    age: 18,
    loca: 'São Paulo'
}
console.log(personal)

//Crie um método no objeto anterior, que mostre o seu nome Completo
personal.fullName = function ()  {
    return `${this.name} ${this.surname}`
}
console.log(personal.fullName())

//Modifique o valor da propriedade preco para 3000 abaixo:
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
carro.preco = 3000
console.log(carro.preco)

//Crie um objeto de um cachorro que represente um labrador,
//Cor preto com 10 anos, que late ao ver um Homem
var labrador = {
    color: 'preto',
    age: 10,
    bark(men) {
        if (men === 'yes') {
            return 'O cachorro está latindo'
        } else {
            return 'O cachorro não está Latindo'
        }
    }
}
console.log(labrador.bark('yes'))