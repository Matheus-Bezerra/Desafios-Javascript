// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
}
function People(name, age) {
    this.name = name
    this.age = age
    this.walk = () => console.log(this.name + ' andou!')
}
console.log(People)
  
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao  = new People('João', 30)
const maria = new People('Maria', 25)
const bruno = new People('Bruno', 21)
console.log(joao)
console.log(maria.name)
bruno.walk()
  
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
    // elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
    const elements = document.querySelectorAll(selector)
    this.element = elements
    this.activeClass = (classe) => {
        elements.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removeClass = (classe) => {
        elements.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const list = new Dom('li')
console.log(list)
console.log(list.activeClass('ativar')) //já esta com a classe ativa por eu ter chamado, se eu chamar .removeClass ela vai desativar a classe que eu apssar no parâmetro
console.log(list.removeClass('teste')) //observe pelo console no browser que os li ja estão sem a classe teste, somente com a ativar que definir acima!
