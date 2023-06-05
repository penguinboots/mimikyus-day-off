const munchlax1 = {
  "stats":{
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "special-attack": 40,
    "special-defense": 85,
    "speed": 5,
  },
  "moves": [
    {
      "name": "crunch",
      "data": {
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
          "category": {
            "name": "damage+lower",
          },
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
            "stat": {
              "name": "defense",
            }
          }
        ],
        "target": "selected-pokemon",
        "type": "dark",
      }
    },
    {
      "name": "bulldoze",
      "data": {
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
          "category": {
            "name": "damage+lower",
          },
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
            "stat": {
              "name": "speed",
            }
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
      }
    },
    {
      "name": "defense-curl",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "defense",
            }
          }
        ],
        "target": "user",
        "type": "normal",
      }
    },
    {
      "name": "charm",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "attack",
            }
          }
        ],
        "target": "selected-pokemon",
        "type": "fairy",
      }
    },
  ],
  "types": [
    {
      "name": "dark"
    }
  ],
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
  "moves": [
    {
      "name": "poison-jab",
      "data": {
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
          "ailment": {
            "name": "poison",
          },
          "ailment_chance": 30,
          "category": {
            "name": "damage+ailment",
          },
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
        "type": {
          "name": "poison",
        }
      }
    },
    {
      "name": "bulldoze",
      "data": {
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
          "category": {
            "name": "damage+lower",
          },
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
            "stat": {
              "name": "speed",
            }
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
      }
    },
    {
      "name": "defense-curl",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "defense",
            }
          }
        ],
        "target": "user",
        "type": "normal",
      }
    },
    {
      "name": "charm",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "attack",
            }
          }
        ],
        "target": "selected-pokemon",
        "type": "fairy",
      }
    },
  ],
  "types": [
    {
      "name": "poison"
    }
  ],
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
  "moves": [
    {
      "name": "iron-head",
      "data": {
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
          "category": {
            "name": "damage",
          },
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
      }
    },
    {
      "name": "bulldoze",
      "data": {
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
          "category": {
            "name": "damage+lower",
          },
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
            "stat": {
              "name": "speed",
            }
          }
        ],
        "target": "all-other-pokemon",
        "type": "ground",
      }
    },
    {
      "name": "defense-curl",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "defense",
            }
          }
        ],
        "target": "user",
        "type": "normal",
      }
    },
    {
      "name": "charm",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "attack",
            }
          }
        ],
        "target": "selected-pokemon",
        "type": "fairy",
      }
    },
  ],
  "types": [
    {
      "name": "steel"
    }
  ],
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
  "moves": [
    {
      "name": "gunk-shot",
      "data": {
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
          "category": {
            "name": "damage+ailment",
          },
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
      }
    },
    {
      "name": "iron-head",
      "data": {
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
          "category": {
            "name": "damage",
          },
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
      }
    },
    {
      "name": "shadow-ball",
      "data": {
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
          "category": {
            "name": "damage+lower",
          },
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
            "stat": {
              "name": "special-defense",
            }
          }
        ],
        "target": "selected-pokemon",
        "type": "ghost",
      }
    },
    {
      "name": "swords-dance",
      "data": {
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
          "category": {
            "name": "net-good-stats",
          },
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
            "stat": {
              "name": "attack",
            }
          }
        ],
        "target": "user",
        "type": "normal",
      }
    },
  ],
  "types": [
    {
      "name": "normal"
    }
  ],
  "height": 21,
  "weight": 4600
}