// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = Array.from(document.querySelectorAll('p'))
console.log(paragrafos)
const qtdTotalP =  paragrafos.reduce((acumulador, item, index) => {
    return acumulador = index + 1
}, 0)
console.log(`Temos em nosso conteúdo ${qtdTotalP} paragrafos!`)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newHtml(tag, classe, content) {
    const element = document.createElement(tag)
    classe ? element.classList.add(classe) : null
    content ? element.innerHTML = content : null
    return element
}
console.log(newHtml('p', 'ativo', 'Olá fui criado Via js'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const newtile = newHtml.bind(null, 'h1', 'titulo')
console.log(newtile('olá Fui criado pelo Bind do Javascript!'))