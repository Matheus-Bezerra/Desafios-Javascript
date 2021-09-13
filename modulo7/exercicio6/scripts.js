//Exercicios

// 1)Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lista = document.querySelectorAll('ul li')
for(const li of lista) {
    li.classList.add('active')
}

console.log(lista)


//2) Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const prop in window){
    console.log(prop)
}