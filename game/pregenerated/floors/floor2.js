const { goomy, dugtrio, snorlax2 } = require("../floor2mons");

const floor_2 = {
  room_1: {
    name: "f2_room_1",
    type: "battle",
    opponent: goomy,
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
    name: "f2_room_2",
    type: "battle",
    opponent: dugtrio,
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
    name: "f2_room_3",
    type: "treasure",
    opponent: null,
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
    name: "f2_room_4",
    type: "battle",
    opponent: snorlax2,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: null,
  },
  next_floor: "floor_3"
}

module.exports = { floor_2 };