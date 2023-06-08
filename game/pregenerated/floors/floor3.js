const { munchlax1, munchlax2, munchlax3, snorlax3 } = require("../floor3mons");

const floor_3 = {
  room_1: {
    name: "f3_room_1",
    type: "battle",
    opponent: munchlax1,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: "room_2",
  },
  room_2: {
    name: "f3_room_2",
    type: "battle",
    opponent: munchlax2,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: "room_3",
  },
  room_3: {
    name: "f3_room_3",
    type: "battle",
    opponent: munchlax3,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: "room_4",
  },
  room_4: {
    name: "f3_room_4",
    type: "treasure",
    opponent: null,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: "room_5",
  },
  room_5: {
    name: "f3_room_5",
    type: "battle",
    opponent: snorlax3,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: null,
  },
  next_floor: null,
}

module.exports = { floor_3 };