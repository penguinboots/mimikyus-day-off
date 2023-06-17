const mimikyu = {
  "name": "mimikyu",
  "proper_name": "Mimikyu",
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
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
  "moves": [
    "astonish",
    "quick-attack",
  ],
  "types": ["ghost", "fairy"],
  "height": 2,
  "weight": 7,
  "sprites": {
    "idle": {
      url: `/sprites/mimikyu-idl.gif`,
      length: 715,
    },
    "attack": {
      url: `/sprites/mimikyu-atk.gif`,
      length: 1015,
    },
    "hit": {
      url: `/sprites/mimikyu-hit.gif`,
      length: 795,
    },
  }
}

module.exports = { mimikyu };