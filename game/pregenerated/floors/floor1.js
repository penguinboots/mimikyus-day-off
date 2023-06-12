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
    music: "01_magikarp",
    intro: "",
    next_room: "room_2",
  },
  room_2: {
    name: "Cherrygrove City",
    type: "treasure",
    opponent: null,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    color: "#316698",
    music: "02_cherrygrove",
    intro: "",
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
    music: "03_snorlax1",
    intro: "",
    next_room: null,
  },
  next_floor: "floor_2"
}

module.exports = {floor_1};