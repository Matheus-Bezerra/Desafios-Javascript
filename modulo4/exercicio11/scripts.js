////Pegue a data completa atual
let date = document.querySelector('span')
let paragraph = document.querySelector('p')
const current = new Date()

let currentDate = current.getDate()
let currentDay = current.getDay()
if(currentDay == 0) {
    currentDay = 'Domingo'
} else if(currentDay == 1) {
    currentDay = 'Segunda'
} else if(currentDay == 2) {
    currentDay = 'Terca-Feira'
} else if(currentDay == 3) {
    currentDay = 'Quarta-Feira'
} else if(currentDay == 4) {
    currentDay = 'Quita-Feira'
} else if(currentDay == 5)  {
    currentDay = 'Sexta-Feira'
} else if(currentDay == 6) {
    currentDay = 'Sabado'
}

let currentMonth = current.getMonth()
if(currentMonth == 0) {
    currentMonth = 'Janeiro'
} else if(currentMonth == 1) {
    currentMonth = 'Fevereiro'
} else if(currentMonth == 2) {
    currentMonth = 'Março'
} else if(currentMonth == 3) {
    currentMonth = 'Abril'
} else if(currentMonth == 4) {
    currentMonth = 'Maio'
}else if(currentMonth == 5) {
    currentMonth = 'Junho'
}else if(currentMonth == 6) {
    currentMonth = 'Julho'
}else if(currentMonth == 7) {
    currentMonth = 'Agosto'
}else if(currentMonth == 8) {
    currentMonth = 'Setembro'
}else if(currentMonth == 9) {
    currentMonth = 'Outubro'
}else if(currentMonth == 10) {
    currentMonth = 'Novembro'
}else if(currentMonth == 11) {
    currentMonth = 'Dezembro'
}
let currentYear = current.getFullYear()
let currentHours = current.getHours()
let currentMinutes = current.getMinutes()
if(currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes
}

paragraph.innerText = `hoje é ${currentDay}, dia ${currentDate} de ${currentMonth} do ano ${currentYear}!`
date.innerText = `O Horário atual é --> ${currentHours}:${currentMinutes}`


//Pegue uma data Futura e passe quantos dias falta

let blackFriday = new Date('November 26 2021 23:59')

function converter(time) {
    return time / (24 * 60 * 60 * 1000)
}

const today = converter(current)
const promoBF = converter(blackFriday)

const missingPromo = today - promoBF
const missingP = Math.round(missingPromo)
const missing = Math.abs(missingP)

console.log(missing)

const promotion = document.querySelector('h4')
promotion.innerText = `Faltam Exatamente ${missing} dias para a Black Friday`