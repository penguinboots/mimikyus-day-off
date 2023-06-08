const goomy = {
  "name": "goomy",
  "current_hp": 45,
  "stats": {  
    "hp": 45,
    "attack": 50,
    "defense": 35,
    "special-attack": 55,
    "special-defense": 75,
    "speed": 40,
  },
  "moves": {
    "poison-jab":{
      "name": "poison-jab",
        "accuracy": 100,
        "damage_class": {
          "name": "physical",
        },
        "effect_chance": 30,
        "effect_changes": [],
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to poison the target.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to poison the target."
          }
        ],
        "id": 398,
        "meta": {
          "ailment": "poison",
          "ailment_chance": 30,
          "category": "damage+ailment",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": 80,
        "pp": 20,
        "priority": 0,
        "stat_changes": [],
        "target": {
          "name": "selected-pokemon",
        },
        "type": "poison",
    },
    "thunderbolt":{
      "name": "thunderbolt",
        "accuracy": 100,
        "damage_class": "special",
        "effect_chance": 10,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to paralyze the target."
          }
        ],
        "id": 85,
        "meta": {
          "ailment": "paralysis",
          "ailment_chance": 10,
          "category": "damage+ailment",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": 90,
        "pp": 15,
        "priority": 0,
        "stat_changes": [],
        "target": "selected-pokemon",
        "type": "electric",
    },
    "defense-curl":{
      "name": "defense-curl",
        "accuracy": null,
        "damage_class": "status",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Raises user's Defense by one stage.\n\nAfter this move is used, the power of ice ball and rollout are doubled until the user leaves the field.",
            "language": {
              "name": "en",
            },
            "short_effect": "Raises user's Defense by one stage."
          }
        ],
        "id": 111,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "net-good-stats",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": null,
        "pp": 40,
        "priority": 0,
        "stat_changes": [
          {
            "change": 1,
            "stat": "defense",
          }
        ],
        "target": "user",
        "type": "normal",
    },
    "baby-doll-eyes":{
      "name": "baby-doll-eyes",
        "accuracy": 100,
        "damage_class": "status",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Lowers the target's Attack by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Lowers the target's Attack by one stage."
          }
        ],
        "id": 608,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "net-good-stats",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": null,
        "pp": 30,
        "priority": 1,
        "stat_changes": [
          {
            "change": -1,
            "stat": "attack",
          }
        ],
        "target": "selected-pokemon",
        "type": "fairy",
    },
  },
  "types": ["dragon"],
  "height": 3,
  "weight": 28
}

const dugtrio = {
  "name": "dugtrio",
  "current_hp": 35,
  "stats": {
    "hp": 35,
    "attack": 100,
    "defense": 60,
    "special-attack": 50,
    "special-defense": 70,
    "speed": 110,
  },

  "moves": {
    "earthquake":{
      "name": "earthquake",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.\n\nIf the target is in the first turn of dig, this move will hit with double power.",
            "language": {
              "name": "en",
            },
            "short_effect": "Inflicts regular damage and can hit Dig users."
          }
        ],
        "id": 89,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "damage",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": 100,
        "pp": 10,
        "priority": 0,
        "stat_changes": [],
        "target": "all-other-pokemon",
        "type": "ground",
    },
    "iron-head":{
      "name": "iron-head",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": 30,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to make the target flinch.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to make the target flinch."
          }
        ],
        "id": 442,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "damage",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 30,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": 80,
        "pp": 15,
        "priority": 0,
        "stat_changes": [],
        "target": "selected-pokemon",
        "type": "steel",
    },
    "swords-dance":{
      "name": "swords-dance",
        "accuracy": null,
        "damage_class": "status",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Raises the user's Attack by two stages.",
            "language": {
              "name": "en",
            },
            "short_effect": "Raises the user's Attack by two stages."
          }
        ],
        "id": 14,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "net-good-stats",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": null,
        "pp": 20,
        "priority": 0,
        "stat_changes": [
          {
            "change": 2,
            "stat": "attack",
          }
        ],
        "target": "user",
        "type": "normal",
    },
    "iron-defense": {
      "name": "iron-defense",
      "accuracy": null,
      "damage_class": "status",
      "effect_chance": null,
      "effect_changes": [],
      "effect_entries": [
        {
          "effect": "Raises the user's Defense by two stages.",
          "language": {
            "name": "en",
          },
          "short_effect": "Raises the user's Defense by two stages."
        }
      ],
      "id": 334,
      "meta": {
        "ailment": "none",
        "ailment_chance": 0,
        "category": "net-good-stats",
        "crit_rate": 0,
        "drain": 0,
        "flinch_chance": 0,
        "healing": 0,
        "max_hits": null,
        "max_turns": null,
        "min_hits": null,
        "min_turns": null,
        "stat_chance": 0
      },
      "power": null,
      "pp": 15,
      "priority": 0,
      "stat_changes": [
        {
          "change": 2,
          "stat": "defense",
        }
      ],
      "target": "user",
      "type": "steel",
    }
  },
  "types": ["ground","steel"],
  "height": 7,
  "weight": 666
}

const snorlax2= {
  "name": "snorlax2",
  "current_hp": 180,
  "stats": {
    "hp": 180,
    "attack": 120,
    "defense": 75,
    "special-attack": 65,
    "special-defense": 95,
    "speed": 96,
  },
  "moves": {
    "crunch":{
      "name": "crunch",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": 20,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Defense by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to lower the target's Defense by one stage."
          }
        ],
        "id": 242,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "damage+lower",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 20
        },
        "power": 80,
        "pp": 15,
        "priority": 0,
        "stat_changes": [
          {
            "change": -1,
            "stat": "defense",
          }
        ],
        "target": "selected-pokemon",
        "type": "dark",
    },
    "earthquake":{
      "name": "earthquake",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.\n\nIf the target is in the first turn of dig, this move will hit with double power.",
            "language": {
              "name": "en",
            },
            "short_effect": "Inflicts regular damage and can hit Dig users."
          }
        ],
        "id": 89,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "damage",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": 100,
        "pp": 10,
        "priority": 0,
        "stat_changes": [],
        "target": "all-other-pokemon",
        "type": "ground",
    },
    "shadow-ball":{
      "name": "shadow-ball",
        "accuracy": 100, 
        "damage_class": "special",
        "effect_chance": 20,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to lower the target's Special Defense by one stage."
          }
        ],
        "id": 247,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "damage+lower",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 20
        },
        "power": 80,
        "pp": 15,
        "priority": 0,
        "stat_changes": [
          {
            "change": -1,
            "stat": "special-defense",
          }
        ],
        "target": "selected-pokemon",
        "type": "ghost",
    },
    "swords-dance":{
      "name": "swords-dance",
        "accuracy": null,
        "damage_class": "status",
        "effect_chance": null,
        "effect_entries": [
          {
            "effect": "Raises the user's Attack by two stages.",
            "language": {
              "name": "en",
            },
            "short_effect": "Raises the user's Attack by two stages."
          }
        ],
        "id": 14,
        "meta": {
          "ailment": "none",
          "ailment_chance": 0,
          "category": "net-good-stats",
          "crit_rate": 0,
          "drain": 0,
          "flinch_chance": 0,
          "healing": 0,
          "max_hits": null,
          "max_turns": null,
          "min_hits": null,
          "min_turns": null,
          "stat_chance": 0
        },
        "power": null,
        "pp": 20,
        "priority": 0,
        "stat_changes": [
          {
            "change": 2,
            "stat": "attack",
          }
        ],
        "target": "user",
        "type": "normal",
    },
  },
  "types": ["normal"],
  "height": 21,
  "weight": 4600
}

module.exports = { goomy, dugtrio, snorlax2 }