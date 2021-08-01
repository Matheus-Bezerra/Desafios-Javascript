// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const courses = document.querySelectorAll('.curso')
const arrayCourse = Array.from(courses)

const objectCourse = arrayCourse.map((course) => {
    const title = course.querySelector('h1').innerText
    const description = course.querySelector('p').innerText
    const classroom = course.querySelector('.aulas').innerText
    const hours = course.querySelector('.horas').innerText
    return {
        title,
        description,
        classroom,
        hours,
    }
})
console.log(objectCourse)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numbersGreater100 = numeros.filter(n => n > 100)
console.log(numbersGreater100)



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const verficatorBaixo = instrumentos.some((item) => item === 'Baixo')
console.log(`Instrumentos tem a  palavra Baixo? ==> ${verficatorBaixo}`)



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valueTotal = compras.reduce((acumulador, item) => {
    const cleanPrice = +item.preco.replace('R$ ', '').trim().replace(',','.')
    return acumulador + cleanPrice

}, 0)
console.log(valueTotal)