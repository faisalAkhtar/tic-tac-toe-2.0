import "../styles/Stat.css"

const Stat = ({isXplaying, winner}) => {
  const status = winner
               ? 'Winner: ' + winner
               : 'Next player: ' + (isXplaying ? 'X' : 'O');

  return (
    <h1 className="stat">
      {status}
    </h1>
  )
};

export default Stat;
