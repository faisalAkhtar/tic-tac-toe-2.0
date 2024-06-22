import { useState } from "react";
import Board from "./components/Board";
import Rematch from "./components/Rematch";
import Stat from "./components/Stat";
import { checkWinner, updateMoves } from "./utils/win";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXplaying, setIsXplaying] = useState(true);
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [winner, setWinner] = useState(null);

  const markSquare = (ind) => {
    if (winner || squares[ind]) return;

    const newSquares = squares.slice();
    newSquares[ind] = isXplaying ? 'X' : 'O';

    let newXMoves = xMoves, newOMoves = oMoves;

    if (isXplaying) {
      newXMoves = updateMoves(xMoves, ind, newSquares);
      setXMoves(newXMoves);
    } else {
      newOMoves = updateMoves(oMoves, ind, newSquares);
      setOMoves(newOMoves);
    }

    setSquares(newSquares);
    setIsXplaying(!isXplaying);

    const newWinner = checkWinner(newXMoves, newOMoves);
    if (newWinner) setWinner(newWinner);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXMoves([]);
    setOMoves([]);
    setWinner(null);
  }

  return (
    <div>
      <Stat winner={winner} isXplaying={isXplaying} />
      <Board
        squares={squares}
        lastXMove={xMoves.length < 3 ? -1 : xMoves[0]}
        lastOMove={oMoves.length < 3 ? -1 : oMoves[0]}
        handleClick={markSquare}
        winner={winner}
      />
      <Rematch isGameEnd={winner} handleClick={resetBoard} />
    </div>
  );
}

export default App;
