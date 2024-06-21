import "../styles/Stat.css"

const Stat = ({winner, isXplaying, isGameEnd}) => {
  return (
    <>
      <h1 className="stat">
        {
          {
            'x': "x wins!!",
            'o': "o wins!!",
            '-': "it's a draw!!"
          }[winner]
        }
      </h1>

      {
        !isGameEnd ? (
          <p className="stat">
            {isXplaying ? "X chance" : "O chance"}
          </p>
        ) : <></>
      }
    </>
  )
};

export default Stat;
