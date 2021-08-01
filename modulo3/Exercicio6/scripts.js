const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const firstFoodRemoved = comidas.shift()
console.log(comidas)
// Remova o último valor de comidas e coloque em uma variável
const lastFoodRemoved = comidas.pop()
console.log(comidas)
// Adicione 'Arroz' ao final da array
const lastFoodAdded = comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
const firstFoodAdded = comidas.unshift('Peixe', 'Batata')
console.log(comidas)

console.log('\n')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const studentsOrder = estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
const studentsReverse = estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
const joanaIsStudents = estudantes.includes('Joana')
console.log(`Joana faz Parte dos Estudantes? --> ${joanaIsStudents}`)
// Verifique se Juliana faz parte dos estudantes
const julianaIsStudents = estudantes.includes('Juliana')
console.log(`Juliana faz parte dos estudantes? --> ${julianaIsStudents}`)

console.log('\n')

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let newHtml = html.split('section').join('ul')
console.log(newHtml)
let HtmlCompleted = html.split('div').join('li')
console.log(HtmlCompleted)

console.log('\n')


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosOriginal = carros.slice()
carros.pop()
console.log(carrosOriginal)
console.log(carros)