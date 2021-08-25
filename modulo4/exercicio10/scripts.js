const title = document.querySelector('h1')
const explanation = document.querySelector('p')

title.innerText = 'Animação com os numeros até chegar ao total:'

explanation.innerText = 'Pegar todos os numeros, percorre eles e defina duas variaveis, o total que vai pegar o etxto do numero em tipo Number, a outra variavel de incrimento que vai arredondar o total / 100. Dentro do percorrimento ainda crie uma variavel que vai iniciar com 0 e outra que vai ser a timer que vai ter um tempo com intervalo.\n\nNo intervalo vai ter um callback que vai pegar a variavel que inicia com 0 e vai somar com a de incrimento e o exto do numero em seguida vai receber o start. Porem se o start for maior que o total, o texto do numero vai ser o total e vai limpar o tempo de intervalo, tudo isspo pode ser em 25ms * Math Round para terminar aleatóriamente entre elas.'

const body = document.querySelector('body')
const respost = document.createElement('h2')

respost.innerText = 'Desafio Realizado no Projeto Final'

body.appendChild(respost)