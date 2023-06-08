const { RSC_MODULE_TYPES } = require("next/dist/shared/lib/constants");
const { magikarp, snorlax1 } = require("../floor1mons");

const floor_1 = {
  room_1: {
    type: "battle",
    opponent: magikarp,
    treasure: {
      sprite: "",
      reward: {},
    },
    background: `url("../public/grass_bg.png")`,
    music: "",
    intro: "",
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
  }
}

module.exports = {floor_1};