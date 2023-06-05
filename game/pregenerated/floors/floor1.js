const { magikarp, snorlax1 } = require("../floor1mons");

const floor_1 = {
  room_1: {
    name: "f1_room_1",
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
    name: "f1_room_2",
    type: "treasure",
    opponent: null,
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
    name: "f1_room_3",
    type: "battle",
    opponent: snorlax1,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("/grass_bg.png")`,
    music: "",
    intro: "",
    next_room: null,
  },
  next_floor: "floor_2"
}

module.exports = {floor_1};