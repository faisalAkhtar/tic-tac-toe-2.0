import "../styles/Board.css"
import Square from "./Square";

const Board = ({squares, lastXMove, lastOMove, handleClick, winner}) => {
  return (
    <div className={winner ? "board end" : "board"}>
      {squares.map((val, ind) =>
        <Square
          value={val}
          lastMove = {ind === lastOMove || ind === lastXMove}
          handleClick={() => handleClick(ind)}
          key={ind}
        />
      )}
    </div>
  )
}

export default Board;
