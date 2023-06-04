const goomy = {
  "current_hp": 45,
  "stats": {  
    "hp": 45,
    "attack": 50,
    "defense": 35,
    "special-attack": 55,
    "special-defense": 75,
    "speed": 40,
  },
  "moves": [

  ],
  "types": [
    {
      "name": "dragon"
    }
  ],
  "height": 3,
  "weight": 28
}

const koffing_or_gastly = {

}

const snorlax2= {
  "current_hp": 180,
  "stats": {
    "hp": 180,
    "attack": 120,
    "defense": 75,
    "special-attack": 65,
    "special-defense": 95,
    "speed": 40,
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
      "name": "earthquake",
      "data": {
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
          "category": {
            "name": "damage",
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
        "power": 100,
        "pp": 10,
        "priority": 0,
        "stat_changes": [],
        "target": "all-other-pokemon",
        "type": "ground",
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