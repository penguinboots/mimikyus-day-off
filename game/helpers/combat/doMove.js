const {changeStat} = require('./changeStat.js')
const {damageCalc} = require('./damageCalc.js')
const {drainCalc} = require('./drainCalc.js')


function doMove(move, user, target) {
  let userStat = ''
  let targetStat = ''
  //check move's damage type to decide which stats to include in damageCalc
  if (move.data.damage_class === "physical") {
    userStat = 'attack'
    targetStat = 'defense'
  } else if (move.data.damage_class === "special") {
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
  if (move.data.category.name === "damage") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
  } else if (move.data.category.name === "damage+lower") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    changeStat(target.statChanges[move.data.stat_changes.stat.name], move.data.stat_changes.change)
  } else if (move.data.category.name === "damage+raise") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    changeStat(user.statChanges[move.data.stat_changes.stat.name], move.data.stat_changes.change)
  } else if (move.data.category.name === "damage+heal") {
    const damage = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    const heal = drainCalc(damage, move.data.meta.drain)
  } else if (move.data.category.name === "net-good-stats") {
    let changeStatOf = {}
    if (move.data.target === 'user') {
     changeStatOf = user
    } else if (move.data.target === 'selected-pokemon'){
     changeStatOf = target
    }
    changeStat(changeStatOf.statChanges[move.data.stat_changes.stat.name], move.data.stat_changes.change)
  }
}