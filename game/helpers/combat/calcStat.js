function calcStat(target, move) {
  let statChanges = {
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
    "target": target
  }
  statChanges[move.stat_changes[0].stat] += move.stat_changes[0].change
  return statChanges
}

module.exports = { calcStat }