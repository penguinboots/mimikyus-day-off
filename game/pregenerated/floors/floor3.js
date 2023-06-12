const { munchlax1, munchlax2, munchlax3, snorlax3 } = require("../floor3mons");

const floor_3 = {
  room_1: {
    name: "Route 35",
    type: "battle",
    opponent: munchlax1,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "08_munchlax1",
    intro: "",
    next_room: "room_2",
  },
  room_2: {
    name: "Ruins of Alph",
    type: "battle",
    opponent: munchlax2,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "09_munchlax2",
    intro: "",
    next_room: "room_3",
  },
  room_3: {
    name: "Route 32",
    type: "battle",
    opponent: munchlax3,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "10_munchlax3",
    intro: "",
    next_room: "room_4",
  },
  room_4: {
    name: "Ecruteak City",
    type: "treasure",
    opponent: null,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "11_ecruteak",
    intro: "",
    next_room: "room_5",
  },
  room_5: {
    name: "Bell Tower",
    type: "battle",
    opponent: snorlax3,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "12_snorlax3",
    intro: "",
    next_room: null,
  },
  next_floor: null,
}

module.exports = { floor_3 };