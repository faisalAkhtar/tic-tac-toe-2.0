import "../styles/Stat.css"

const Stat = ({isXplaying, winner}) => {
  return (
    <div className="stat-box">
      {winner ? (
        <h1 className="winner">
          <span className="sym">{winner}</span>
          wins !!!
        </h1>
      ) : (
        <div className="overbox">
          <div className="stat X">X</div>
          <div className="stat O">O</div>
          <div className={
            winner
            ? 'underscore'
            : (isXplaying ? 'underscore left' : 'underscore right')
          } />
        </div>
      )}
    </div>
  )
};

export default Stat;
