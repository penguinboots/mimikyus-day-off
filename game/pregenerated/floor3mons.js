const munchlax1 = {
  "name": "munchlax1",
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
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
    "bulldoze",
    "defense-curl",
    "charm",
  ],
  "types": ["dark"],
  "height": 6,
  "weight": 1050,
  "sprites": {
    "idle": `url("/sprites/munchlax-idl.gif")`,
    "attack": `url("/sprites/munchlax-atk.gif")`,
    "hit": `url("/sprites/munchlax-hit.gif")`,
  }
}

const munchlax2 = {
  "name": "munchlax2",
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
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
    "bulldoze",
    "defense-curl",
    "charm",
  ],
  "types": ["poison"],
  "height": 6,
  "weight": 1050,
  "sprites": {
    "idle": `url("/sprites/munchlax-idl.gif")`,
    "attack": `url("/sprites/munchlax-atk.gif")`,
    "hit": `url("/sprites/munchlax-hit.gif")`,
  }
}

const munchlax3 = {
  "name": "munchlax3",
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
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
    "iron-head",
    "bulldoze",
    "defense-curl",
    "charm",
  ],
  "types": ["steel"],
  "height": 6,
  "weight": 1050,
  "sprites": {
    "idle": `url("/sprites/munchlax-idl.gif")`,
    "attack": `url("/sprites/munchlax-atk.gif")`,
    "hit": `url("/sprites/munchlax-hit.gif")`,
  }
}

const snorlax3 = {
  "name": "snorlax3",
  "current_hp": 200,
  "stats": {
    "hp": 200,
    "attack": 130,
    "defense": 85,
    "special-attack": 65,
    "special-defense": 80,
    "speed": 100,
  },
  "moves": [
    "gunk-shot",
    "iron-head",
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

module.exports = { munchlax1, munchlax2, munchlax3, snorlax3 }