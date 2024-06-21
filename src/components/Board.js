import "../styles/Board.css"
import Square from "./Square";

const Board = ({squares, isGameEnd, handleClick}) => {
  return (
    <div className="board">
      {squares.map((val, ind) =>
        <Square
          value={val}
          handleClick={() => isGameEnd ? null : handleClick(ind)}
          key={ind}
        />
      )}
    </div>
  )
}

export default Board;
