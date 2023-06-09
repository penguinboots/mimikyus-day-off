function opponentMoveSelect([move1, move2, move3, move4]) {
let d4 = Math.floor(Math.random() * 4 )
  if (d4 === 0){
    return move1
  } else if (d4 === 1){
    return move2
  } else if (d4 === 2){
    return move3
  } else if (d4 === 3){
    return move4
  }
}

module.exports = { opponentMoveSelect }