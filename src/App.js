import { useState } from "react";
import Board from "./components/Board";
import Rematch from "./components/Rematch";
import Stat from "./components/Stat";
import { checkWinner } from "./utils/win";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXplaying, setIsXplaying] = useState(true);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [winner, setWinner] = useState(null);

  const markSquare = (ind) => {
    if (squares[ind] !== null) return;
    
    const updatesSquares = squares.map((val, idx) => {
      if (idx !== ind) return val;
      else return isXplaying ? 'x' : 'o';
    });
    
    const win = checkWinner(updatesSquares);
    if (win !== null) {
      setWinner(win);
      setIsGameEnd(true);
    }
    setSquares(updatesSquares);
    setIsXplaying(!isXplaying);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setIsGameEnd(false);
    setWinner(null);
  }

  return (
    <>
      <Stat winner={winner} isXplaying={isXplaying} isGameEnd={isGameEnd} />
      <Board squares={squares} isGameEnd={isGameEnd} handleClick={markSquare} />
      <Rematch isGameEnd={isGameEnd} handleClick={resetBoard} />
    </>
  );
}

export default App;
