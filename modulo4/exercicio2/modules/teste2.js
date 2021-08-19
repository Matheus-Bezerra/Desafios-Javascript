export default function initTesteSegundo() {
    console.log('Eu sou uma Array e vou ser manipulada!')
    const bestPlayers = ['Cristiano Ronaldo', 'Messi', 'Neymar', 'Mbappe', 'Lewandowski']
    const playerAdded = bestPlayers.push('Haland')
    console.log(bestPlayers)
    const copyPlayer = bestPlayers.slice(bestPlayers)
    const playerRemoved = bestPlayers.shift()
    console.log(bestPlayers)
    console.log(copyPlayer)
}