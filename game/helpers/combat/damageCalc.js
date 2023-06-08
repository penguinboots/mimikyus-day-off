const typeEffectiveness = require( '../../data/typeEffectiveness.json');

function damageCalc(move, userStat, targetStat, user_types, target_types) {
  //if we implement levelling at any point, replace the 50 below with the user's level
  let baseDamage = ((((2 + 50)/2) * move.power) * (userStat/targetStat))
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
  } 
  //consider type effectiveness, use value from json
  target_types.forEach(type => {
    totalMultiplier *= typeEffectiveness[type][move.type]
  })
  const finalDamage = baseDamage * totalMultiplier
  return finalDamage
}

module.exports = { damageCalc }