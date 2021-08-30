//crie um arquivo Json com um tema de criação de curso e sincronize com ele aqui e percorra sobre as matérias, aulas e minutos dele


function aulas() {
    fetch('./curso.json')
    .then(r => r.json())
    .then(json => {
        json.forEach(json => {
            console.log(json.id, json.aula, json.min)
        });
    })
}
aulas()