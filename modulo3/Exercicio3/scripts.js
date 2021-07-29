// Liste 5 objetos nativos
const name = 'Matheus'
/*Resposta:
    1 - Lenght -> quantidade de caracteres; 
    2 - charArt(1) -> a; 
    3 - Replace('s', 'zinho') -> substituição; 
    4 - slice(0,3) -> Quero pegar as 3 primeiras letras!; 
    5- toLowerCase -> Letra minusculas!
*/


// Liste 5 objetos do browser
window
history
NodeList
HTMLCollection
document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

//1
if (typeof document.webkitVisibilityState !== 'undefined') {
    console.log('Existe!')
} else {
    console.log('Não Existe!')
}
//2
if (typeof document.webkitCurrentFullScreenElement !== 'undefined') {
    console.log('Existe!')
} else {
    console.log('Não Existe!')
}