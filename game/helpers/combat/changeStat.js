function changeStat(target, stat, stages) {
  //CHANGE THIS TO OUTPUT INSTEAD
  let statChanges = {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
    "target": target
  }
  statChanges[stat] += stages
  return statChanges
}

module.exports = { changeStat }