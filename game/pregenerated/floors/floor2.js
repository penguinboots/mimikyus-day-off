const { goomy, dugtrio, snorlax2 } = require("../floor2mons");

const floor_2 = {
  room_1: {
    name: "Route 31",
    type: "battle",
    opponent: goomy,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/backgrounds/route_31.png")`,
    color: "#7e6a56",
    music: "04_goomy.mp3",
    intro: `/splashes/vs_goomy.png`,
    next_room: "room_2",
  },
  room_2: {
    name: "Dark Cave",
    type: "battle",
    opponent: dugtrio,
    treasure: {
      items:["oran-berry"],
      moves:[
        "leech-life",
        "charm",
        "trailblaze",
        "wood-hammer",
        "screech",
        "shadow-ball",
      ]
    },
    background: `url("/backgrounds/dark_cave.png")`,
    color: "#49443e",
    music: "05_dugtrio.mp3",
    intro: `/splashes/vs_dugtrio.png`,
    next_room: "room_3",
  },
  room_3: {
    name: "Violet City",
    type: "treasure",
    opponent: null,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/backgrounds/violet.png")`,
    color: "#c9b7db",
    music: "06_violet.mp3",
    intro: "",
    next_room: "room_4",
  },
  room_4: {
    name: "Route 36",
    type: "battle",
    opponent: snorlax2,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/backgrounds/route_36.png")`,
    color: "#dda2a7",
    music: "07_snorlax2.mp3",
    intro: `/splashes/00_splash.png`,
    next_room: null,
  },
  next_floor: "floor_3"
}

module.exports = { floor_2 };