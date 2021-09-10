//Crie funções dentro de funções para demonstrar a Closure
//Lembre-se de ativar o Debugger antes!
//Em seguida explique como funciona o Closure!


let item1 = 1

function funcao1() {
    let item2 = 2
    console.log(item1)
    console.log(item2)
    console.log('\n')
    function funcao2() {
        let item3 = 3
        console.log(item1)
        console.log(item2)
        console.log(item3)
    }
    funcao2()
}

console.log(funcao1())

console.log('Closure é como se guardasse a função pai em uma mochila, pois se precisar de algum item dela, ela terá na mochila!')
console.log('Acesso ao escopo Léxicos!')


//Crie uma função incrementar, usando a Closure

debugger
function contar() {
    let total = 0
    return function incrementar() {
        total ++
        console.log(total)
    }
}

const ativar = contar()
ativar()
ativar()
ativar()

console.log('\n')
console.log(ativar())