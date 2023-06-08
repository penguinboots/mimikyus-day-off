const { floor_1 } = require("./floors/floor1");
const { floor_2 } = require("./floors/floor2");
const { floor_3 } = require("./floors/floor3");

const dungeon = {
  floor_1,
  floor_2,
  floor_3,
}

module.exports= { dungeon };