const { magikarp, snorlax1 } = require("../floor1mons");

const floor_1 = {
  room_1: {
    name: "New Bark Town",
    type: "battle",
    opponent: magikarp,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/backgrounds/new_bark_town.png")`,
    color: "#1f89aa",
    music: "01_magikarp.mp3",
    intro: `/splashes/vs_magikarp.png`,
    achievement: null,
    next_room: "room_2",
  },
  room_2: {
    name: "Cherrygrove City",
    type: "treasure",
    opponent: null,
    treasure: {
      items:["oran-berry"],
      moves:[
        "shadow-sneak",
        "psychic",
        "draining-kiss",
        "charge-beam",
        "giga-drain",
        "dark-pulse",
      ]
    },
    background: `url("/backgrounds/cherrygrove.png")`,
    color: "#ffafde",
    music: "02_cherrygrove.mp3",
    intro: "",
    achievement: null,
    next_room: "room_3",
  },
  room_3: {
    name: "Route 30",
    type: "battle",
    opponent: snorlax1,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/backgrounds/route_30.png")`,
    color: "#7f9b63",
    music: "03_snorlax1.mp3",
    intro: `/splashes/vs_snorlax1.png`,
    achievement: null,
    next_room: null,
  },
  next_floor: "floor_2"
}

module.exports = {floor_1};