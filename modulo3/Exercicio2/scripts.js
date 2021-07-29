// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function People(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = 18
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa
People.prototype.fullName = function() {
    return `${this.name} ${this.lastname}`
}
const matheus = new People('Matheus', 'Bezerra', 18)
console.log(matheus.fullName())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTML Element
li.click; //Function
li.innerText; //String
li.value; // Number
li.hidden;  //Boolean
li.offsetLeft; // Number
li.click(); // Undefined
// OBS: Qualquer coisa Usar a propriedade da função construtora que é valor.constructor.name => retorna o tipo do valor, protótipo!

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name)