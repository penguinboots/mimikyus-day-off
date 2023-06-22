const { accuracyCheck } = require('./accuracyCheck.js')
const { calcStat } = require('./calcStat.js')
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
  let output = {
    damage: 0,
    critical: false,
    effectiveness: 'neutral'
  }
  let heal = 0;
  let statChanges = {}
  const results = {
    damage: null, 
    heal: null, 
    statChanges: null,
    critical: false,
    effectiveness: "neutral",
    miss: false,
  }
  //check move accuracy to see if it hits
  if (!accuracyCheck(move.accuracy)){
    results.miss = true;
    return results
  } 
  //check user for stat changes and apply them to the stat
  if (user.statChanges[userStat] > 0) {
    userMoveStat *= (user.statChanges[userStat] + 2) / 2
  } else if (user.statChanges[userStat] < 0) {
    userMoveStat *= 2 / (Math.abs(user.statChanges[userStat]) + 2)
  }
  //check target for stat changes and apply them to the stat
  if (target.statChanges[targetStat] > 0) {
    targetMoveStat *= (target.statChanges[targetStat] + 2) / 2
  } else if (target.statChanges[targetStat] < 0) {
    targetMoveStat *= 2 / (Math.abs(target.statChanges[targetStat]) + 2)
  }
  //check move category and perform appropriate actions
  if (move.category === "damage") {
    output = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    //recoil
    if (move.drain < 0){
      heal = 0 - drainCalc(output.damage, move.drain)
    }
  }
  else if (move.category === "damage+lower") {
    output = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    if (accuracyCheck(move.stat_chance)){
      statChanges = calcStat("target", move)
    }
  } else if (move.category === "damage+raise") {
    output = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    if (accuracyCheck(move.stat_chance)){
      statChanges = calcStat("self", move)
    }
  } else if (move.category === "damage+heal") {
    output = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    heal = drainCalc(output.damage, move.drain)
  } else if (move.category === "damage+ailment") {
    output = damageCalc(move, userMoveStat, targetMoveStat, user.types, target.types)
    // if (accuracyCheck(move.ailment_chance)){
    //   Ailments don't exist yet ;)
    // }
  }  else if (move.category === "net-good-stats") {
    let changeStatOf = ""
    if (move.target === 'user') {
      changeStatOf = "self"
    } else if (move.target === 'selected-pokemon') {
      changeStatOf = "target"
    }
    statChanges = calcStat(changeStatOf, move)
  } else if (move.category === "unique") {
    if (move.name === "splash") {
       results.damage = null;
    }
  } else if (move.category === "healing"){
    heal = drainCalc(user.stats.hp, move.healing)
  }
  if (output.damage !== 0) {
    results.damage = output.damage
  }
  if (heal !== 0) {
    results.heal = heal
  }
  if (statChanges.target) {
    results.statChanges = statChanges
  }
  results.critical = output.critical;
  results.effectiveness = output.effectiveness;
  return results
}

module.exports = { calculateMove }