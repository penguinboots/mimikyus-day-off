const typeEffectiveness = require( '../../data/typeEffectiveness.json');

function damageCalc(move, userStat, targetStat, user_types, target_types) {
  //if we implement levelling at any point, replace the 50 below with the user's level
  let baseDamage = ((((2 + 50)/2) * move.power) * (userStat/targetStat))
  const results = {
    damage: null,
    critical: false,
    effectiveness: "neutral",
  }
  let totalMultiplier = 1
  //apply same-type attack bonus
  user_types.forEach(type => {
    if (type === move.type) {
      totalMultiplier *= 1.5
    }
  });
  //critical hit
  let critSuccess = Math.floor(Math.random() * 16 )
  if (critSuccess === 0){
    totalMultiplier *= 1.5
    results.critical = true
  } 
  let typeMultiplier = 1
  //consider type effectiveness, use value from json
  target_types.forEach(type => {
    typeMultiplier *= typeEffectiveness[type][move.type]
  })
  if (typeMultiplier === 0) {
    results.effectiveness = "immune"
  }
  if (typeMultiplier === 0.5) {
    results.effectiveness = "not-very"
  }
  if (typeMultiplier === (2 || 4)) {
    results.effectiveness = "super"
  }
  totalMultiplier *= typeMultiplier
  const finalDamage = baseDamage * totalMultiplier
  results.damage = finalDamage
  return results
}

module.exports = { damageCalc }