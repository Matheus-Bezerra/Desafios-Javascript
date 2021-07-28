// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuClonado = menu.cloneNode(true)
const contato = document.querySelector('.contato')
contato.appendChild(menuClonado)
// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq dl dt')
console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const ddReferent = primeiroDt.nextElementSibling
console.log(ddReferent)
// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML