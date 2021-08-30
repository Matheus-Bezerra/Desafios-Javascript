// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector('#cep')
const btnCep = document.querySelector('#btnCep')
const resultadoCep = document.querySelector('.paragrafoCep')


btnCep.addEventListener('click', handleClick)

function handleClick(event) {
    event.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
}
function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(cep => {
        console.log(cep)
        resultadoCep.innerText = `Rua: ${cep.logradouro}, Bairro: ${cep.bairro}, localidade: ${cep.localidade} ${cep.uf}.`
    })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s

const bitcoin = document.querySelector('.btc')

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(precoBtc => {
        bitcoin.innerText = `R$ ${precoBtc.BRL.buy}`.replace('.',',')
    })
}

fetchBtc()

setInterval(fetchBtc, 1000 * 30);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnPiada = document.querySelector('.btnPiada')
const resPiada = document.querySelector('.piada')


btnPiada.addEventListener('click', piadas)

function piadas() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => resPiada.innerText = piada.value)
}

piadas()