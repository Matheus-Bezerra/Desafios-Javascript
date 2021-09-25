//Exercicios

/*1) Crie dois regular Expression, criadas de forma diferentes!*/

const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

console.log('(11) 5555-5555'.replace(regexpTELEFONE1, 'X'))
console.log('(11) 5555-5555'.replace(regexpTELEFONE2, 'X'))
console.log('\n')

/*2) Apartir da regexp abaixo, verifique minimo 3 de suas propriedades existentes */

const regexp = /\w+/gi
console.log(regexp.flags)
console.log(regexp.global)
console.log(regexp.ignoreCase)
console.log(regexp.multiline)
console.log(regexp.source)
console.log('\n')

/*3) Verifique se tem a palavra Java nos index 0, 4, 17. OBS: use o método test() */

const regular = /java/gi
const frase = 'Javascript e Java'

regular.lastIndex = 0
console.log(regular.test(frase))
regular.lastIndex = 4
console.log(regular.test(frase))
regular.lastIndex = 17
console.log(regular.test(frase))

/*4) Exiba uma linguagem de cada vez, com seu indice e frase. 
Usando o método exec() */

const regex = /\w{2,}/g
const frase2 = 'javascript, TypeScript e CoffeScript'

console.log(regex.exec(frase2))
console.log(regex.exec(frase2))
console.log(regex.exec(frase2))
console.log('\n')

/*5) Transforme a string em uma array*/

const regular2 = /\w{2,}/g
const frase3 = 'Javascript, React, Vue, Angular'

console.log(frase3.match(regular2))
console.log('\n')

/*6) usando uma regular expression, altere as tags ul e li para div */
const tags = `
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`

console.log(tags.split(/(?<=<\/?)\w+/g).join('div'))