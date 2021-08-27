const body = document.querySelector('body')
const title = document.querySelector('h1')
title.innerText = 'Síncrono Vs Assíncrono'
const list = document.createElement('ul')
list.innerText = 'Síncrono'
body.appendChild(list, title)
const subListSincrono = document.createElement('li')
subListSincrono.innerText = 'Espera a Tarefa acabar para continuar com a próxima'
body.appendChild(subListSincrono, list)
const listAssinc = document.createElement('ul')
listAssinc.innerText = 'Assíncrono'
body.appendChild(listAssinc, list)
const subListAssinc = document.createElement('li')
subListAssinc.innerText = 'Mover para a próxima tarefa antes da terminar anterior. O trabalho será obtido no fundo e quando eliminado, será colocado na fila (Task Queue). Não depende da outra para  executar!'
body.appendChild(subListAssinc, listAssinc)
const exAssync = document.createElement('li')
exAssync.innerText = 'Exemplos de Assíncronos: setTimeout, ajax, Promises, Fetch, Async'
body.appendChild(exAssync, subListAssinc)
const subtitle = document.createElement('h2')
subtitle.innerText = 'Vantagens de usar Assíncrona:'
body.appendChild(subtitle, listAssinc)
const listAdvantage = document.createElement('li')
listAdvantage.innerText = 'Carregamento no fundo, ele não trava o script. é possível usar o site enquanto o processamento é realizado no fundo.'
body.appendChild(listAdvantage, subtitle)
const listAdvantageSecond = document.createElement('li')
listAdvantageSecond.innerText = 'Função ao término, ou seja podemos ficar de olho no carregamento e executar uma função assim que ele terminar'
body.appendChild(listAdvantageSecond, listAdvantage)
const listAdvantageThird = document.createElement('li')
listAdvantageThird.innerText = 'Requisições ao Servidor, então não precisa recarregar a página por completo á cada requisição feita ao servidor'
body.appendChild(listAdvantageThird, listAdvantageSecond)