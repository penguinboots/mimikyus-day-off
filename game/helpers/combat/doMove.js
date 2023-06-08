const {changeStat} = require('./changeStat.js')
const {damageCalc} = require('./damageCalc.js')
const {drainCalc} = require('./drainCalc.js')


function doMove(move, user, target) {
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
  //check user for stat changes and apply them to the stat
  if (user.statChanges[userStat] > 0) {
    console.log("Multiplier: ", (user.statChanges[userStat] + 2)/2)
    userMoveStat *= (user.statChanges[userStat] + 2)/2 
  } else if (user.statChanges[userStat] < 0) {
    console.log("Multiplier: ", 2/(user.statChanges[userStat] + 2))
    userMoveStat *= 2/(user.statChanges[userStat] + 2) 
  }
  //check user for stat changes and apply them to the stat
  if (user.statChanges[userStat] > 0) {
    console.log("Multiplier: ", (user.statChanges[userStat] + 2)/2)
    userMoveStat *= (user.statChanges[userStat] + 2)/2 
  } else if (user.statChanges[userStat] < 0) {
    console.log("Multiplier: ", 2/(user.statChanges[userStat] + 2))
    userMoveStat *= 2/(user.statChanges[userStat] + 2) 
  }
  //check move category and perform appropriate actions
  if (move.category === "damage") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
  } else if (move.category === "damage+lower") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    changeStat(target, target.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.category === "damage+raise") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    changeStat(user, user.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.category === "damage+heal") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    const heal = drainCalc(damage, move.meta.drain)
  } else if (move.category === "net-good-stats") {
    let changeStatOf = {}
    if (move.target === 'user') {
     changeStatOf = user
    } else if (move.target === 'selected-pokemon'){
     changeStatOf = target
    }
    changeStat(changestatOf, changeStatOf.statChanges[move.stat_changes.stat], move.stat_changes.change)
  } else if (move.category === "unique") {
    if (move.name === "splash") {
      const damage = 0
    }
  }
  const results = {}
  if (damage) {
    results.damage = damage
  }
  if (heal) {
    results.heal = heal
  }
  return results
}