//Exercicios

//1) Reescreva a função utilizando
// valores iniciais de parâmetros com ES6

/*function createButton(background, color) {
    background = background || 'blue';
    if(color === undefined) {
      color = 'red';
    }
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    return buttonElement;
  }*/
  
  //Resposta
  function createButton(background = 'blue', color = 'red') {
      const buttonElement = document.createElement('button');
      buttonElement.style.background = background;
      return buttonElement;
    }
    
const blueButton = createButton();
console.log(blueButton)


//2) Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
  
const refeicao = comidas.push(...frutas)
console.log(comidas)

//3) crie uma função somente com dois parâmetros, tendo o prêmio e os ganhadores
//os ganhadores devem ser mais de 1 uma pessoa neste segundo parâmetro

function ganhadoresMegaSena(premio, ...ganhadores) {
    console.log(`O prêmio foi R$${premio}, sendo os ganhadores ${ganhadores}`)
}

const ganhadores = ['Matheus', 'Fabricio', 'Wyslan', 'Emerson']

ganhadoresMegaSena(100000, ganhadores)