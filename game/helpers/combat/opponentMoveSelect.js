let opponentMoveSelect = (opponent) => {
  let moves = Object.keys(opponent.moves);
  return moves[Math.floor(Math.random() * moves.length)];
};

module.exports = { opponentMoveSelect }