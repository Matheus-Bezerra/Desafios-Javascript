//Exercicios

/*1) Crie uma regular expression para formatação de todos os CPFS
da página index html */

const cpfs = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText)
}

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3.$4')
}

const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF)
}

const substituiCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formatarCPFS(cpfs)

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index]
    });
}

substituiCPFS(cpfs)