// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu ul li a')
menu.forEach(item => {
    item.classList.add('ativo')
})
console.log(menu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
    if(index === 0) {
        item.classList.add('ativo')
    } else {
        item.classList.remove('ativo')
    }
})
console.log(menu)

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll('img')
images.forEach(item => {
    console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu
menu.forEach(link => {
    link.setAttribute('href', 'https://google.com.br')
})
menu.forEach(link => {
    console.log(link.getAttribute('href'))
})
