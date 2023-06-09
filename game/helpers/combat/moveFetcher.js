const moves = require("../../data/moves.json")

function moveFetcher(moveString) {
  return moves[moveString]
}

module.exports = { moveFetcher }