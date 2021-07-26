// Mostre no console cada parágrado do site
const paragraph = document.querySelectorAll('p')

// Mostre o texto dos parágrafos no console
paragraph.forEach(element => {
    console.log(element)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
}); 
//Resposta -> quando se tem 2 parâmetros no forEach tem que incluir () neles, quando se tem um não precisa que é o elemento.

let i = 0;
imgs.forEach((img) => {
    i++
    console.log(i)
});
//Resposta -> foi corrigido o forEach que faltava organização

