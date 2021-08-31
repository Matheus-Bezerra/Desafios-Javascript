// Interaja com a apis de Pokemons e pegue o nome do Charizard

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(pokemon => console.log(pokemon.results[5].name))

// pegue um api para simular um método Post na função assíncrona e em seguida pegue o body que passar nas opções!

const url = 'https://jsonplaceholder.typicode.com/posts/'
const options = {
    method: 'POST',
    body: '{"title": "Javascript"}',
    headers: {
        //permite que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
.then(r => r.json())
.then(post => console.log(post))
