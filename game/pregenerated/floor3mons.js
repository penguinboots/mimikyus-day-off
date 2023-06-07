const munchlax1 = {
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
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
    "bulldoze":{
      "name": "bulldoze",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": 100,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Speed by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to lower the target's Speed by one stage."
          }
        ],
        "id": 523,
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
          "stat_chance": 100
        },
        "power": 60,
        "pp": 20,
        "priority": 0,
        "stat_changes": [
          {
            "change": -1,
            "stat": "speed",
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
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
    "charm":{
          "name": "charm",
            "accuracy": 100,
            "damage_class": "status",
            "effect_chance": null,
            "effect_entries": [
              {
                "effect": "Lowers the target's Attack by two stages.",
                "language": {
                  "name": "en",
                },
                "short_effect": "Lowers the target's Attack by two stages."
              }
            ],
            "id": 204,
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
                "change": -2,
                "stat": "attack",
              }
            ],
            "target": "selected-pokemon",
            "type": "fairy",
    },
  },
  "types": ["dark"],
  "height": 6,
  "weight": 1050
}

const munchlax2 = {
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
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
    "bulldoze":{
      "name": "bulldoze",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": 100,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Speed by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to lower the target's Speed by one stage."
          }
        ],
        "id": 523,
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
          "stat_chance": 100
        },
        "power": 60,
        "pp": 20,
        "priority": 0,
        "stat_changes": [
          {
            "change": -1,
            "stat": "speed",
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
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
    "charm":{
        "name": "charm",
          "accuracy": 100,
          "damage_class": "status",
          "effect_chance": null,
          "effect_entries": [
            {
              "effect": "Lowers the target's Attack by two stages.",
              "language": {
                "name": "en",
              },
              "short_effect": "Lowers the target's Attack by two stages."
            }
          ],
          "id": 204,
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
              "change": -2,
              "stat": "attack",
            }
          ],
          "target": "selected-pokemon",
          "type": "fairy",
    },
},
  "types": ["poison"],
  "height": 6,
  "weight": 1050
}

const munchlax3 = {
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
  },
  "moves": {
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
    "bulldoze":{
      "name": "bulldoze",
        "accuracy": 100,
        "damage_class": "physical",
        "effect_chance": 100,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Speed by one stage.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to lower the target's Speed by one stage."
          }
        ],
        "id": 523,
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
          "stat_chance": 100
        },
        "power": 60,
        "pp": 20,
        "priority": 0,
        "stat_changes": [
          {
            "change": -1,
            "stat": "speed",
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
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
    "charm":{
        "name": "charm",
          "accuracy": 100,
          "damage_class": "status",
          "effect_chance": null,
          "effect_entries": [
            {
              "effect": "Lowers the target's Attack by two stages.",
              "language": {
                "name": "en",
              },
              "short_effect": "Lowers the target's Attack by two stages."
            }
          ],
          "id": 204,
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
              "change": -2,
              "stat": "attack",
            }
          ],
          "target": "selected-pokemon",
          "type": "fairy",
    },
  },
  "types": ["steel"],
  "height": 6,
  "weight": 1050
}

const snorlax3= {
  "current_hp": 200,
  "stats": {
    "hp": 200,
    "attack": 130,
    "defense": 85,
    "special-attack": 65,
    "special-defense": 80,
    "speed": 100,
  },
  "moves": {
    "gunk-shot":{
      "name": "gunk-shot",
        "accuracy": 80,
        "damage_class": "physical",
        "effect_chance": 30,
        "effect_entries": [
          {
            "effect": "Inflicts regular damage.  Has a $effect_chance% chance to poison the target.",
            "language": {
              "name": "en",
            },
            "short_effect": "Has a $effect_chance% chance to poison the target."
          }
        ],
        "id": 441,
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
        "power": 120,
        "pp": 5,
        "priority": 0,
        "stat_changes": [],
        "target": "selected-pokemon",
        "type": "poison",
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