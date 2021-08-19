/* Exercicios
Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são

/* 1 , 2, 3, 4  - Votos para os respectivos candidatos 
(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
5 - Voto Nulo
6 - Voto em Branco
Faça um programa que calcule e mostre:
O total de votos para cada candidato;
O total de votos nulos;
O total de votos em branco;
A percentagem de votos nulos sobre o total de votos;*/
export default function initTestePrimeiro() {
   console.log('Bem vindo ao sistema de seleção de presidência 2022, escolha seu candidato!')

   console.log('\nVote 1 -> para Bolsonaro.\nVote 2 -> para Lula.\nVote 3 -> para João Doria.\nVote 4 -> para Marina.')
   let op = 1
   let bolsonaro = 0
   let lula = 0
   let joao = 0
   let marina = 0
   let nulo = 0
   let branco = 0
   while(op !== 0) {
      op = window.prompt('1 -> Bolsonaro; 2 -> Lula; 3 -> João Dória; 4 -> Marina; 5 -> Voto nulo; 6 -> Voto Branco; 0 -> Sair do Programa!')
      while(op < 0 || op > 6) {
         op = window.prompt('Entrada inválida, Digite novamente!\n1 -> Bolsonaro; 2 -> Lula; 3 -> João Dória; 4 -> Marina; 5 -> Voto nulo; 6 -> Voto Branco; 0 -> Sair do Programa! ')
      }
      if(op == 0)
         break
      if(op == 1) {
         bolsonaro ++
      }
      if(op == 2) {
         lula ++
      }
      if(op == 3) {
         joao ++
      }
      if(op == 4) {
         marina ++
      }
      if(op == 5) {
         nulo ++
      }
      if(op == 6) {
         branco ++
      }
   }
   window.alert(`TOTAL DE VOTOS:\NBolsonaro --> ${bolsonaro}\nLula --> ${lula}\nJoão Dória --> ${joao}\nMarina --> ${marina}\nNulos --> ${nulo}\nEm branco --> ${branco}`)
}