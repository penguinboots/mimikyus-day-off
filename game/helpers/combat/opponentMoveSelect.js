import { moveFetcher } from "./moveFetcher";

let opponentMoveSelect = (opponent) => {
  let moves = opponent.moves;
  return moveFetcher(moves[Math.floor(Math.random() * moves.length)]);
};

module.exports = { opponentMoveSelect }