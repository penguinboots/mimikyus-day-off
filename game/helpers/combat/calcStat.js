function calcStat(target, move) {
  console.log(move.stat_changes)
  let statChanges = {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
    "target": target
  }
  statChanges[move.stat_changes[0].stat] += move.stat_changes[0].change
  console.log(statChanges)
  return statChanges
}

module.exports = { calcStat }