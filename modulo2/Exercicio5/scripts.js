// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
console.log(img.offsetTop)


// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
width = 0
imgs.forEach(img => {
    const widthImg = img.offsetWidth
    width += widthImg
})
console.log(width)


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach(link => {
    if(link.offsetWidth <= 48 && link.offsetHeight <= 48) {
        console.log(`${link} Possui Boa acessibilidade`)
    } else {
        console.log(`${link}Não possui boa acessibilidade`)
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if(window.matchMedia('(max-width: 720px)' == true)) {
    links.forEach(item => {
        item.classList.add('.ativo')
    })
}
console.log(links)