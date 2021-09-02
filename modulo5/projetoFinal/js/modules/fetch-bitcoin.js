export default function initFetchBitcoin() {
    async function fetchBitcoin() {
        try {
            const btcPreco = document.querySelector('.btc-preco')

            const bitcoinFecth = await fetch('https://blockchain.info/ticker')
            const bitcoinJson = await bitcoinFecth.json()
            const valueBitcoin = await (1000 / bitcoinJson.BRL.sell).toFixed(4)
            btcPreco.innerText = valueBitcoin
        } catch(erro) {
            console.log('O erro foi --> ' + erro)
        }
    }
    fetchBitcoin()
}
