import "../styles/Square.css"

const Square = ({value, lastMove, handleClick}) => {
  return (
    <button
      className={lastMove ? 'square last' : 'square'}
      onClick={handleClick}
    >
      {value}
    </button>
  )
};

export default Square;
