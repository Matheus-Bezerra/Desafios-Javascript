import Countdown from "./countdown.js";

const diasParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300')
const tempoParaAnoNovo = new Countdown('31 December 2021 23:59:59 GMT-0300')


console.log(diasParaONatal._futureDate.getDay())
console.log(diasParaONatal.days) //dias para o natal
console.log(diasParaONatal.hours) //horas para o natal
console.log(diasParaONatal.minutes) //Minutes para o natal
console.log('\n')
console.log(diasParaONatal.total)

console.log(tempoParaAnoNovo.total)