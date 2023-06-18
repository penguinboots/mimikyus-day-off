const moves = require("../../data/achievements.json")

function achievementFetcher(name) {
  return achievements[name];
}

module.exports = { achievementFetcher }