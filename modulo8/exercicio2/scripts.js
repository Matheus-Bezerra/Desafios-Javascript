//1) Copie a palavra Java e duplique logo em seguida
const text = 'PHP e Java são lingaugens diferentes'
const duplicate = text.replace(/Java/gi, '$& ------- $&')
console.log(duplicate)

//2) Troque gmail.com por origamid.com
const email = 'matheusbwzerra002@gmail.com'
const subEmail = email.replace(/(\w+)@([\w.]+)/gi, '$1@origamid.com')

//3) Troque os caracteres antes do @ por contato!
const subEmail2 = email.replace(/(\w+)@([\w.]+)/gi, 'contato@$2')
console.log(subEmail)
console.log(subEmail2)

//4) Coloque X nos aon invés de numeros, na frente do px somente!
const numbers = '2m, 4px, 5%, 2px, 1px'.replace(/\d(?=px)/gi, 'X') // oque vem van frente de px no caso, isso que significa o ?=
console.log(numbers)