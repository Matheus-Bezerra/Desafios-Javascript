/*Transforme a função abaixe com um
novo jeito de função do tipo assincrona*/

/*function iniciarFetch() {
    fetch('./clientes.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
      console.log(dadosJSON.nome)
    })
  }
  iniciarFetch();*/

async function iniciarFetch() {
    try {
        const clientes = await fetch('./clientes.json')
        const clientesJson = await(await clientes).json()
        const cliente = clientesJson.forEach(cliente => {
            console.log(cliente)
        }); 
    } catch (erro) {
        console.log('Deu erro -> ' + erro)
    }
}

iniciarFetch()

async function iniciarAsync() {
    const promiseDados = await fetch('./dados.json')
    const dadosJson = await(await promiseDados).json()
    console.log('\n')
    dadosJson.forEach(dado => console.log(dado))
}

iniciarAsync()