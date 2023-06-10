const goomy = {
  "name": "goomy",
  "proper_name": "Goomy",
  "current_hp": 45,
  "stats": {  
    "hp": 45,
    "attack": 50,
    "defense": 35,
    "special-attack": 55,
    "special-defense": 75,
    "speed": 40,
  },
  "statChanges": {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
  "moves": [
    "poison-jab",
    "thunderbolt",
    "defense-curl",
    "baby-doll-eyes",
  ],
  "types": ["dragon"],
  "height": 3,
  "weight": 28,
  "sprites": {
    "idle": `url("/sprites/goomy-idl.gif")`,
    "attack": `url("/sprites/goomy-atk.gif")`,
    "hit": `url("/sprites/goomy-hit.gif")`,
  }
}

const dugtrio = {
  "name": "dugtrio-alola",
  "proper_name": "Dugtrio",
  "current_hp": 35,
  "stats": {
    "hp": 35,
    "attack": 100,
    "defense": 60,
    "special-attack": 50,
    "special-defense": 70,
    "speed": 110,
  },
  "statChanges": {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
  "moves": [
    "earthquake",
    "iron-head",
    "swords-dance",
    "iron-defense",
  ],
  "types": ["ground","steel"],
  "height": 7,
  "weight": 666,
  "sprites": {
    "idle": `url("/sprites/dugtrio-idl.gif")`,
    "attack": `url("/sprites/dugtrio-atk.gif")`,
    "hit": `url("/sprites/dugtrio-hit.gif")`,
  }
}

const snorlax2= {
  "name": "snorlax2",
  "proper_name": "Snorlax",
  "current_hp": 180,
  "stats": {
    "hp": 180,
    "attack": 120,
    "defense": 75,
    "special-attack": 65,
    "special-defense": 95,
    "speed": 96,
  },
  "statChanges": {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
  "moves": [
    "crunch",
    "earthquake",
    "shadow-ball",
    "swords-dance",
  ],
  "types": ["normal"],
  "height": 21,
  "weight": 4600,
  "sprites": {
    "idle": `url("/sprites/snorlax-idl.gif")`,
    "attack": `url("/sprites/snorlax-atk.gif")`,
    "hit": `url("/sprites/snorlax-hit.gif")`,
  }
}

module.exports = { goomy, dugtrio, snorlax2 }