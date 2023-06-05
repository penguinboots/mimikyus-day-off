const { changeStat } = require('./changeStat.js')
const { damageCalc } = require('./damageCalc.js')
const { drainCalc } = require('./drainCalc.js')


function calculateMove(move, user, target) {
  let userStat = ''
  let targetStat = ''
  //check move's damage type to decide which stats to include in damageCalc
  if (move.damage_class === "physical") {
    userStat = 'attack'
    targetStat = 'defense'
  } else if (move.damage_class === "special") {
    userStat = ['special-attack']
    targetStat = ['special-defense']
  }
  let userMoveStat = user.stats[userStat]
  let targetMoveStat = target.stats[targetStat]
  let damage = 0;
  let heal = 0;
  let statChanges = {}
  //check user for stat changes and apply them to the stat
  // if (user.statChanges[userStat] > 0) {
  //   console.log("Multiplier: ", (user.statChanges[userStat] + 2) / 2)
  //   userMoveStat *= (user.statChanges[userStat] + 2) / 2
  // } else if (user.statChanges[userStat] < 0) {
  //   console.log("Multiplier: ", 2 / (user.statChanges[userStat] + 2))
  //   userMoveStat *= 2 / (user.statChanges[userStat] + 2)
  // }
  // //check user for stat changes and apply them to the stat
  // if (user.statChanges[userStat] > 0) {
  //   console.log("Multiplier: ", (user.statChanges[userStat] + 2) / 2)
  //   userMoveStat *= (user.statChanges[userStat] + 2) / 2
  // } else if (user.statChanges[userStat] < 0) {
  //   console.log("Multiplier: ", 2 / (user.statChanges[userStat] + 2))
  //   userMoveStat *= 2 / (user.statChanges[userStat] + 2)
  // }
  //check move category and perform appropriate actions
  if (move.meta.category === "damage") {
    damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
  } else if (move.meta.category === "damage+lower") {
    damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    statChanges = changeStat(target, target.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.meta.category === "damage+raise") {
    damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    statChanges = changeStat(user, user.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.meta.category === "damage+heal") {
    damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    heal = drainCalc(damage, move.meta.drain)
  } else if (move.meta.category === "net-good-stats") {
    let changeStatOf = {}
    if (move.target === 'user') {
      changeStatOf = user
    } else if (move.target === 'selected-pokemon') {
      changeStatOf = target
    }
    statChanges = changeStat(changestatOf, changeStatOf.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.meta.category === "unique") {
    if (move.name === "splash") {
       damage = 0
    }
  }
  const results = {
    damage: null, 
    heal: null, 
    statChanges: null
  }
  if (damage !== 0) {
    results.damage = damage * 0.5;
  }
  if (heal !== 0) {
    results.heal = heal}
  if (statChanges.target) {
    results.statChanges = statChanges
  }
  return results
}

module.exports = { calculateMove }