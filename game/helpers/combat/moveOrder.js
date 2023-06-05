function moveOrder(move1, player, moreOpp, opponent) {
  let move1First = [{"move": move1, "user": user1, "target":user2}, {"move": move2, "user": user2, "target": user1}]
  let move2First = [{"move": move2, "user": user2, "target": user1}, {"move": move1, "user": user1, "target":user2}]
  //compare move priority and return the moves ordered by greater priority if there is a difference
  if (move1.priority > move2.priority) {
    return move1First
  } else if (move1.priority < move2.priority){
    return move2First
  } else {
    //if the priority is the same, compare the user's speed and return the moves ordered by greater user's speed
    if (user1.stats.speed > user2.stats.speed){
      return move1First
    } else if (user1.stats.speed < user2.stats.speed) {
      return move2First
    } else if (user1.stats.speed === user2.stats.speed) {
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

module.exports = {moveOrder}