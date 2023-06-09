const mimikyu = {
  "name": "Mimikyu",
  "current_hp": 55,
  "stats": {
    "hp": 55,
    "attack": 90,
    "defense": 80,
    "special-attack": 50,
    "special-defense": 105,
    "speed": 96
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
    "scratch",
    "shadow-sneak",
    "play-rough",
    "charm",
  ],
  "types": ["ghost", "fairy"],
  "height": 2,
  "weight": 7,
  "sprites": {
    "idle": `url("/sprites/mimikyu-idl.gif")`,
    "attack": `url("/sprites/mimikyu-atkhit.gif")`,
    "hit": `url("/sprites/mimikyu-atkhit.gif")`,
  }
}

module.exports = { mimikyu };