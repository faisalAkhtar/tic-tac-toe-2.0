const checkWinner = (xMoves, oMoves) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinner = (moves) => {
    return lines.some((line) => line.every((index) => moves.includes(index)))
  };

  if (isWinner(xMoves)) return 'X';
  if (isWinner(oMoves)) return 'O';
  return null;
};

const updateMoves = (moves, ind, squares) => {
  const newMoves = [...moves, ind];
  if (newMoves.length > 3) {
    const [lastMove, ...rest] = newMoves;
    squares[lastMove] = null;
    return rest;
  }
  return newMoves;
}

export { checkWinner, updateMoves };
