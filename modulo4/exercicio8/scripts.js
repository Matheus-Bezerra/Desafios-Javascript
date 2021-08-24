// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body= document.querySelector('body')
setInterval(() => {
    if(body.style.backgroundColor === 'red') {
        body.style.backgroundColor = 'blue'
        return
    } 
    body.style.backgroundColor = 'red'
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
let interval
const btnIniciar = document.createElement('button')
btnIniciar.innerText = 'Iniciar'
const btnPausar = document.createElement('button')
btnPausar.innerText = 'Pausar'
const btnResetar = document.createElement('button')
btnResetar.innerText = 'Resetar'
body.appendChild(btnIniciar)
body.appendChild(btnPausar)
body.appendChild(btnResetar)

const tempo = document.querySelector('.tempo')
seconds = 0
btnIniciar.addEventListener('click', timeAdvancing)
function timeAdvancing() {
    interval = setInterval(() => {
        seconds ++
        tempo.innerText = seconds
    }, 1000);
}

btnPausar.addEventListener('click', breakTime)

function breakTime() {
    clearInterval(interval)
}

btnResetar.addEventListener('click', resetTime)

function resetTime() {
    clearInterval(interval)
    tempo.innerText = 0
    seconds = 0
}