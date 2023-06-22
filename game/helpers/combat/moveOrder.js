function moveOrder(move1, player, move2, opponent) {
  let move1First = [{ "move": move1, "user": player, "target": opponent }, { "move": move2, "user": opponent, "target": player }]
  let move2First = [{ "move": move2, "user": opponent, "target": player }, { "move": move1, "user": player, "target": opponent }]
  //compare move priority and return the moves ordered by greater priority if there is a difference
  if (move1.priority > move2.priority) {
    return move1First
  } else if (move1.priority < move2.priority) {
    return move2First
  } else {
    //if the priority is the same, compare the user's speed and return the moves ordered by greater user's speed
    //first, apply stat changes to speed:
    //check user for stat changes and apply them to speed
    if (player.statChanges.speed > 0) {
      player.stats.speed *= (player.statChanges.speed + 2) / 2
    } else if (player.statChanges.speed < 0) {
      player.stats.speed *= 2 / (Math.abs(player.statChanges.speed) + 2)
    }
    //check target for speed changes and apply them to speed
    if (opponent.statChanges.speed > 0) {
      opponent.stats.speed *= (opponent.statChanges.speed + 2) / 2
    } else if (opponent.statChanges.speed < 0) {
      opponent.stats.speed *= 2 / (Math.abs(opponent.statChanges.speed) + 2)
    }
    if (player.stats.speed > opponent.stats.speed) {
      return move1First
    } else if (player.stats.speed < opponent.stats.speed) {
      return move2First
    } else if (player.stats.speed === opponent.stats.speed) {
      //if speeds are the same, flip a coin
      let coin = Math.floor(Math.random() * 2)
      if (coin === 0) {
        return move1First
      } else {
        return move2First
      }
    }
  }
}

module.exports = { moveOrder }