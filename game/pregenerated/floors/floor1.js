const { magikarp, snorlax1 } = require("../floor1mons");

const floor_1 = {
  room_1: {
    type: "battle",
    opponent: magikarp,
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
    type: "treasure",
    opponent: null,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: "",
    music: "",
    intro: "",
    next_room: "room_3",
  },
  room_3: {
    type: "battle",
    opponent: snorlax1,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: "",
    music: "",
    intro: "",
    next_room: null,
  }
}

module.exports = {floor_1};