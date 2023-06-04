const axios = require('axios');
const fs = require('fs');

//Swap this with the move objects you wish to generate (WARNING, REQUIRES PARSING)
const data = [
  {
    "name": "fire-punch",
    "url": "https://pokeapi.co/api/v2/move/7/"
  },
  {
    "name": "ice-punch",
    "url": "https://pokeapi.co/api/v2/move/8/"
  },
  {
    "name": "thunder-punch",
    "url": "https://pokeapi.co/api/v2/move/9/"
  },
  {
    "name": "scratch",
    "url": "https://pokeapi.co/api/v2/move/10/"
  },
  {
    "name": "swords-dance",
    "url": "https://pokeapi.co/api/v2/move/14/"
  },
  {
    "name": "headbutt",
    "url": "https://pokeapi.co/api/v2/move/29/"
  },
  {
    "name": "tackle",
    "url": "https://pokeapi.co/api/v2/move/33/"
  },
  {
    "name": "body-slam",
    "url": "https://pokeapi.co/api/v2/move/34/"
  },
  {
    "name": "take-down",
    "url": "https://pokeapi.co/api/v2/move/36/"
  },
  {
    "name": "double-edge",
    "url": "https://pokeapi.co/api/v2/move/38/"
  },
  {
    "name": "bite",
    "url": "https://pokeapi.co/api/v2/move/44/"
  },
  {
    "name": "flamethrower",
    "url": "https://pokeapi.co/api/v2/move/53/"
  },
  {
    "name": "hydro-pump",
    "url": "https://pokeapi.co/api/v2/move/56/"
  },
  {
    "name": "ice-beam",
    "url": "https://pokeapi.co/api/v2/move/58/"
  },
  {
    "name": "blizzard",
    "url": "https://pokeapi.co/api/v2/move/59/"
  },
  {
    "name": "bubble-beam",
    "url": "https://pokeapi.co/api/v2/move/61/"
  },
  {
    "name": "hyper-beam",
    "url": "https://pokeapi.co/api/v2/move/63/"
  },
  {
    "name": "solar-beam",
    "url": "https://pokeapi.co/api/v2/move/76/"
  },
  {
    "name": "thunderbolt",
    "url": "https://pokeapi.co/api/v2/move/85/"
  },
  {
    "name": "thunder-wave",
    "url": "https://pokeapi.co/api/v2/move/86/"
  },
  {
    "name": "thunder",
    "url": "https://pokeapi.co/api/v2/move/87/"
  },
  {
    "name": "earthquake",
    "url": "https://pokeapi.co/api/v2/move/89/"
  },
  {
    "name": "toxic",
    "url": "https://pokeapi.co/api/v2/move/92/"
  },
  {
    "name": "quick-attack",
    "url": "https://pokeapi.co/api/v2/move/98/"
  },
  {
    "name": "mimic",
    "url": "https://pokeapi.co/api/v2/move/102/"
  },
  {
    "name": "defense-curl",
    "url": "https://pokeapi.co/api/v2/move/111/"
  },
  {
    "name": "lick",
    "url": "https://pokeapi.co/api/v2/move/122/"
  },
  {
    "name": "fire-blast",
    "url": "https://pokeapi.co/api/v2/move/126/"
  },
  {
    "name": "skull-bash",
    "url": "https://pokeapi.co/api/v2/move/130/"
  },
  {
    "name": "leech-life",
    "url": "https://pokeapi.co/api/v2/move/141/"
  },
  {
    "name": "splash",
    "url": "https://pokeapi.co/api/v2/move/150/"
  },
  {
    "name": "rock-slide",
    "url": "https://pokeapi.co/api/v2/move/157/"
  },
  {
    "name": "slash",
    "url": "https://pokeapi.co/api/v2/move/163/"
  },
  {
    "name": "struggle",
    "url": "https://pokeapi.co/api/v2/move/165/"
  },
  {
    "name": "flail",
    "url": "https://pokeapi.co/api/v2/move/175/"
  },
  {
    "name": "protect",
    "url": "https://pokeapi.co/api/v2/move/182/"
  },
  {
    "name": "belly-drum",
    "url": "https://pokeapi.co/api/v2/move/187/"
  },
  {
    "name": "giga-drain",
    "url": "https://pokeapi.co/api/v2/move/202/"
  },
  {
    "name": "charm",
    "url": "https://pokeapi.co/api/v2/move/204/"
  },
  {
    "name": "crunch",
    "url": "https://pokeapi.co/api/v2/move/242/"
  },
  {
    "name": "shadow-ball",
    "url": "https://pokeapi.co/api/v2/move/247/"
  },
  {
    "name": "rock-smash",
    "url": "https://pokeapi.co/api/v2/move/249/"
  },
  {
    "name": "focus-punch",
    "url": "https://pokeapi.co/api/v2/move/264/"
  },
  {
    "name": "superpower",
    "url": "https://pokeapi.co/api/v2/move/276/"
  },
  {
    "name": "brick-break",
    "url": "https://pokeapi.co/api/v2/move/280/"
  },
  {
    "name": "hyper-voice",
    "url": "https://pokeapi.co/api/v2/move/304/"
  },
  {
    "name": "astonish",
    "url": "https://pokeapi.co/api/v2/move/310/"
  },
  {
    "name": "rock-tomb",
    "url": "https://pokeapi.co/api/v2/move/317/"
  },
  {
    "name": "bulk-up",
    "url": "https://pokeapi.co/api/v2/move/339/"
  },
  {
    "name": "copycat",
    "url": "https://pokeapi.co/api/v2/move/383/"
  },
  {
    "name": "dark-pulse",
    "url": "https://pokeapi.co/api/v2/move/399/"
  },
  {
    "name": "x-scissor",
    "url": "https://pokeapi.co/api/v2/move/404/"
  },
  {
    "name": "drain-punch",
    "url": "https://pokeapi.co/api/v2/move/409/"
  },
  {
    "name": "focus-blast",
    "url": "https://pokeapi.co/api/v2/move/411/"
  },
  {
    "name": "giga-impact",
    "url": "https://pokeapi.co/api/v2/move/416/"
  },
  {
    "name": "shadow-claw",
    "url": "https://pokeapi.co/api/v2/move/421/"
  },
  {
    "name": "shadow-sneak",
    "url": "https://pokeapi.co/api/v2/move/425/"
  },
  {
    "name": "zen-headbutt",
    "url": "https://pokeapi.co/api/v2/move/428/"
  },
  {
    "name": "gunk-shot",
    "url": "https://pokeapi.co/api/v2/move/441/"
  },
  {
    "name": "iron-head",
    "url": "https://pokeapi.co/api/v2/move/442/"
  },
  {
    "name": "wood-hammer",
    "url": "https://pokeapi.co/api/v2/move/452/"
  },
  {
    "name": "hone-claws",
    "url": "https://pokeapi.co/api/v2/move/468/"
  },
  {
    "name": "heavy-slam",
    "url": "https://pokeapi.co/api/v2/move/484/"
  },
  {
    "name": "bulldoze",
    "url": "https://pokeapi.co/api/v2/move/523/"
  },
  {
    "name": "wild-charge",
    "url": "https://pokeapi.co/api/v2/move/528/"
  },
  {
    "name": "heat-crash",
    "url": "https://pokeapi.co/api/v2/move/535/"
  },
  {
    "name": "belch",
    "url": "https://pokeapi.co/api/v2/move/562/"
  },
  {
    "name": "draining-kiss",
    "url": "https://pokeapi.co/api/v2/move/577/"
  },
  {
    "name": "play-rough",
    "url": "https://pokeapi.co/api/v2/move/583/"
  },
  {
    "name": "dazzling-gleam",
    "url": "https://pokeapi.co/api/v2/move/605/"
  },
  {
    "name": "baby-doll-eyes",
    "url": "https://pokeapi.co/api/v2/move/608/"
  },
  {
    "name": "power-up-punch",
    "url": "https://pokeapi.co/api/v2/move/612/"
  },
  {
    "name": "body-press",
    "url": "https://pokeapi.co/api/v2/move/776/"
  },
];

async function fetchData() {
  for (const item of data) {
    try {
      const response = await axios.get(item.url);
      const json_data = response.data;

      // Assign the fetched JSON data to the "url" key of the item object
      item.data = json_data;
    } catch (error) {
      console.error(`Error fetching data for ${item.name}:`, error.message);
    }
  }

  const outputFile = 'updated_data.json';
  fs.writeFile(outputFile, JSON.stringify(data, 2), err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Updated data (filtered) has been written to ${outputFile}`);
    }
  });
}

fetchData();