const { moveOrder } = require("../moveOrder")

testmon= {
  "current_hp": 20,
  "stats": {
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "special-attack": 15,
    "special-defense": 20,
    "speed": 80
  }}
testmonSame= {
  "current_hp": 20,
  "stats": {
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "special-attack": 15,
    "special-defense": 20,
    "speed": 80
  }}
testmonFaster= {
  "current_hp": 20,
  "stats": {
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "special-attack": 15,
    "special-defense": 20,
    "speed": 81
  }}
testmonSlower= {
  "current_hp": 20,
  "stats": {
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "special-attack": 15,
    "special-defense": 20,
    "speed": 79
  }}
quickAttack = {
  name: "quick attack",
  data: {
    priority: 1
  }
}
regularAttackBySlower = {
  name: "regular attack by Slower mon",
  data: {
    priority: 0
  }
}
regularAttackByFaster = {
  name: "regular attack by Faster mon",
  data: {
    priority: 0
  }
}
regularAttackByPlayer = {
  name: "Player attacks",
  data: {
    priority: 0
  }
}
regularAttackByOpponent = {
  name: "Opponent attacks",
  data: {
    priority: 0
  }
}


console.log("Test if Speed checks apply appropriately:")
console.log(moveOrder(regularAttackByFaster, testmon, regularAttackBySlower, testmonSlower))
console.log(moveOrder(regularAttackBySlower, testmon, regularAttackByFaster, testmonFaster))
console.log("Test if priority overcomes speed differences")
console.log(moveOrder(regularAttackByFaster, testmon, quickAttack, testmonSlower))
console.log(moveOrder(quickAttack, testmon, regularAttackByFaster, testmonFaster))
console.log("Test if coin flip applies approximately equal distribution")
// Array to store the results and iterations count
const results = [];
const numIterations = 100;
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === value) {
      count++;
    }
  }
  return count;
}
// Run the code block multiple times and store the outcomes
for (let i = 0; i < numIterations; i++) {
  const result = moveOrder(regularAttackByPlayer, testmon, regularAttackByOpponent, testmonSame);
  results.push(result[0]);
}
const playerWins = countOccurrences(results, "Player attacks")
const opponentWins = countOccurrences(results, "Opponent attacks")
console.log("Player attacks first :", playerWins)
console.log("Opponent attacks first :", opponentWins)