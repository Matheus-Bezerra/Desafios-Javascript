//Crie uma promessa sem interagir com then ou catch, realize uma condição com esta promessa se for true entre na resolvida se não entra na rejeitada e apresente um erro

const promesa = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao) {
        setTimeout(() => {
            resolve({nome: 'Matheus', idade: 18})
        }, 1000);
    } else {
        reject(Error('Um erro ocorreu no código!'))
    }
})
console.log(promesa)

// crie uma promessa e interaja com Then, catch e fianlly

const retorno = promesa
.then(resolucao => {
    resolucao.profissao = 'Desenvolvedor'
    return resolucao
})
.then(resolucao => {
    resolucao.comidaFavorita = 'Pizza'
    console.log(resolucao)
    return resolucao
})
.catch(rejeitada => {
    console.log(rejeitada)
})
.finally(() => {
    console.log('Acabou a Promessa!')
})


//retorne em um array uma nova promessa assim que todas as promessas dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta deve retornar um array com as reposta de cada promessa


const login = new Promise(resolve => {
    setTimeout(() => {
        resolve('Usuario Logado!')
    }, 2000)
})

const items = new Promise(resolve => {
    setTimeout(() => {
        resolve('Items cadastrados!')
    }, 1500)
})

const carregouTudo = Promise.all([login, items])

carregouTudo.then((resolve) => {
    console.log(resolve)
})

// Retorne uma nova promessa assim que a primeira for resolvida ou rejeitada como se fosse uma corrida, essa nova promessa terá a resposta da primeira resolvida

const carregouPrimeiro = Promise.race([login, items])
carregouPrimeiro.then((resolve) => {
    console.log(resolve)
})