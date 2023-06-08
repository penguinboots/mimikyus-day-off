function changeStat(target, stat, stages) {
  target.statChanges[stat] += stages
}

module.exports = { changeStat }