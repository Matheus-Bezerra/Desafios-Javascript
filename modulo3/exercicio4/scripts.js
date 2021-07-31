// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let somador = 0
transacoes.forEach((item, index) => {
    somador += +item.valor.slice(3)
})
console.log('O valor final deu R$',somador)
  

  // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)
  

  // Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

const newHtml = html.split('span').join('a')
console.log(newHtml)
  

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase[frase.length - 1])


  // Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let numbersRates = 0
transacoes1.forEach((item) => {
    item = item.trim().toLowerCase().slice(0, 4)
    if(item.includes('taxa')) {
        numbersRates += 1
    }  
})
console.log(`Tem ${numbersRates} Taxas!`)
