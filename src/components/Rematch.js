import "../styles/Rematch.css"

const Rematch = ({isGameEnd, handleClick}) => {
  return isGameEnd ? (
      <button className="rematch" onClick={handleClick}>
        Rematch
      </button>
    ) : (<div className="rematch" />);
};

export default Rematch;
