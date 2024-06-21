import { useState } from "react";
import Board from "./components/Board";
import Rematch from "./components/Rematch";
import Stat from "./components/Stat";
import { checkWinner } from "./utils/win";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXplaying, setIsXplaying] = useState(true);
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  const [winner, setWinner] = useState(null);

  const markSquare = (ind) => {
    if (winner || squares[ind] !== null) return;

    const newSquares = squares.slice();
    newSquares[ind] = isXplaying ? 'X' : 'O';

    let newXMoves = xMoves;
    let newOMoves = oMoves;

    if (isXplaying) {
      newXMoves = [...xMoves, ind];
      if (newXMoves.length > 3) {
        const [lastMove, ...rest] = newXMoves;
        newSquares[lastMove] = null;
        newXMoves = rest.slice();
      }
      setXMoves(newXMoves);
    } else {
      newOMoves = [...oMoves, ind];
      if (newOMoves.length > 3) {
        const [lastMove, ...rest] = newOMoves;
        newSquares[lastMove] = null;
        newOMoves = rest.slice();
      }
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
    <>
      <Stat
        winner={winner}
        isXplaying={isXplaying}
      />
      <Board
        squares={squares}
        lastXMove={xMoves.length < 3 ? -1 : xMoves[0]}
        lastOMove={oMoves.length < 3 ? -1 : oMoves[0]}
        handleClick={markSquare}
      />
      <Rematch
        isGameEnd={winner}
        handleClick={resetBoard}
      />
    </>
  );
}

export default App;
