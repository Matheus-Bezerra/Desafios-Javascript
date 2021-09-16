//Exercicios

//1) Com a frase da variavel mês abaixo, selecione julho ou junho

const mes = 'julho e junho'
const mesSelecionado = mes.replace(/ju[ln]ho/gi, 'Selecionei')
console.log(mesSelecionado)

//2) Selecione na frase abaixo todos os alfas sem acentos
const text = 'O peso e tamanho dos lobos variam muito é´m todo o mundo.'

const textAlfas = text.replace(/[a-z]/gi, 'X')
console.log(textAlfas)

//3) Substitui todos os alfanuméricos do texto abaixo

const textRandom =  'o peso dsda aikoddao [] da 049__12'
const todosAlfanumericos = textRandom.replace(/\w/gi, 'Z')
console.log(todosAlfanumericos)

//4) Selecione todos os a da palavra Vaaaaaaai e substitua por um a
const repeticao = 'Vaaaaai pra cima Neymar!'
const repeticaoASelecionado = repeticao.replace(/a{5}/gi, 'a')
console.log(repeticaoASelecionado)

//5) Porcura por: digitos em ocorrência de um ou mais e substitua por X somente
const digitos = '222.2222.333.9742'.replace(/\d+/gi, 'X')
console.log(digitos)

console.log('\n')

//6) Regex com p opcional, pode ou não ter e se encontrar substitua por Regular Expression

const regexText = 'Qual é o certo, regexp ou regex ?'
const regexSelecao = regexText.replace(/regexp?/g, 'Regular Expression')
console.log(regexSelecao)


//7) //Coloque a diferença abaixo

//Resposta: A expressão abaixo ela seleciona a palavra java tendo ou nõa caracter depois
const javaTeste = 'Java não é javascript'.replace(/java/gi, 'X')
console.log(javaTeste)

//Resposta: A expressão abaixo ela seleciona a palavra java mas não tendo caracter antes por causa do \b
const javaUnico = 'Java não é javascript'.replace(/java\b/gi, 'X')
console.log(javaUnico)


//8) //substitui o inicio do email(alfanumérico pode ser) por X, Inclusive o da linha debaixo!

const email = 
`matheus@gmail.com
contato@gmail.com`.replace(/^\w+/gim, 'X')

console.log(email)


//9) //Procure por @ ou &copy

const emailEspecial = 
`matheus@origamid.com
contato©origamid.com`.replace(/\u00A9|\u0040/gm, '--')
console.log(emailEspecial)