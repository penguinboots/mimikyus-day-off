const magikarp = {
  "name": "magikarp",
  "current_hp": 20,
  "stats": {
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "special-attack": 15,
    "special-defense": 20,
    "speed": 80
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
    "tackle",
    "splash",
    "splash",
    "splash",
  ],
  "types": ["water"],
  "height": 9,
  "weight": 100,
}

const snorlax1 = {
  "name": "snorlax1",
  "current_hp": 160,
  "stats": {
    "hp": 160,
    "attack": 110,
    "defense": 65,
    "special-attack": 65,
    "special-defense": 110,
    "speed": 30,
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
    "bite",
    "rock-tomb",
    "defense-curl",
    "baby-doll-eyes",
  ],
  "types": ["normal"],
  "height": 21,
  "weight": 4600
}

module.exports = { magikarp, snorlax1 };