const checkWinner = (squares) => {
  // helper function to check if the cells are equal and not null
  const isWinningCombo = (a,b,c) => squares[a] &&
                          squares[a] === squares[b] &&
                          squares[b] === squares[c];
  
  // rows & columns
  for (let i = 0; i < 3; i++) {
    if (isWinningCombo(i*3, i*3+1, i*3+2))
      return squares[i*3];
    if (isWinningCombo(i, i+3, i+6))
      return squares[i];
  }

  // diagonals
  if (isWinningCombo(0,4,8) || isWinningCombo(2,4,6))
    return squares[4];

  // check for draw
  if (!squares.includes(null)) {
    return '-';
  }
  
  // game is still on
  return null;
};

export { checkWinner };
