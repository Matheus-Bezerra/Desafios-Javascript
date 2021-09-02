export default function initFetchBitcoin() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(bitcoin => {
        const btcPreco = document.querySelector('.btc-preco')
        btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch(erro => {
        console.log(Error(erro))
    })

    async function fetchBitcoin() {
        try {
            const btcPreco = document.querySelector('.btc-preco')

            const bitcoinFecth = await fetch('https://blockchain.info/ticker')
            const bitcoinJson = await bitcoinFecth.json()
            const valueBitcoin = await (1000 / bitcoinJson.BRL.sell).toFixed(4)
            btcPreco.innerText = valueBitcoin
        } catch(erro) {
            console.log(erro)
        }
    }
    fetchBitcoin()
} 
