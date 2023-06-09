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
  "moves": {
    "tackle": {
      "name": "tackle",
      "accuracy": 100,
      "damage_class": "physical",
      "effect_chance": null,
      "effect_entries": [
        {
          "effect": "Inflicts regular damage.",
          "language": {
            "name": "en",
          },
          "short_effect": "Inflicts regular damage with no additional effect."
        }
      ],
      "id": 33,
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
      "power": 40,
      "pp": 35,
      "priority": 0,
      "stat_changes": [],
      "target": "selected-pokemon",
      "type": "normal",
    },
    "splash": {
      "name": "splash",
      "accuracy": null,
      "damage_class": "status",
      "effect_chance": null,
      "effect_entries": [
        {
          "effect": "Does nothing.\n\nThis move cannot be used while gravity is in effect.",
          "language": {
            "name": "en",
          },
          "short_effect": "Does nothing."
        }
      ],
      "id": 150,
      "meta": {
        "ailment": "none",
        "ailment_chance": 0,
        "category": "unique",
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
      "stat_changes": [],
      "target": "user",
      "type": "normal",
    },
    "splash": {
      "name": "splash",
      "accuracy": null,
      "damage_class": "status",
      "effect_chance": null,
      "effect_entries": [
        {
          "effect": "Does nothing.\n\nThis move cannot be used while gravity is in effect.",
          "language": {
            "name": "en",
          },
          "short_effect": "Does nothing."
        }
      ],
      "id": 150,
      "meta": {
        "ailment": "none",
        "ailment_chance": 0,
        "category": "unique",
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
      "stat_changes": [],
      "target": "user",
      "type": "normal",
    },
    "splash": {
      "name": "splash",
      "accuracy": null,
      "damage_class": "status",
      "effect_chance": null,
      "effect_entries": [
        {
          "effect": "Does nothing.\n\nThis move cannot be used while gravity is in effect.",
          "language": {
            "name": "en",
          },
          "short_effect": "Does nothing."
        }
      ],
      "id": 150,
      "meta": {
        "ailment": "none",
        "ailment_chance": 0,
        "category": "unique",
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
      "stat_changes": [],
      "target": "user",
      "type": "normal",
    },
  },
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
  "moves": {
    "bite": {
      "name": "bite",
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
      "id": 44,
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
      "power": 60,
      "pp": 25,
      "priority": 0,
      "stat_changes": [],
      "target": "selected-pokemon",
      "type": "dark",
    },
    "rock-tomb": {
      "name": "rock-tomb",
      "accuracy": 95,
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
      "id": 317,
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
      "pp": 15,
      "priority": 0,
      "stat_changes": [
        {
          "change": -1,
          "stat": "speed",
        }
      ],
      "target": "selected-pokemon",
      "type": "rock",
    },
    "defense-curl": {
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
    "baby-doll-eyes": {
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
  "types": ["normal"],
  "height": 21,
  "weight": 4600
}

module.exports = { magikarp, snorlax1 };