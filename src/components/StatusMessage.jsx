const StatusMessage = ({ winner, isNext, squares }) => {
  const noMoveLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMoveLeft) {
      return (
        <>
          <span className="text-orange">O</span>and{' '}
          <span className="text-green">X</span> tied
        </>
      );
    }
    if (!winner && !noMoveLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return (
    <div className="status-message">
      {renderStatusMessage()}
      {/* {winner && <div> Winner is ${winner} </div>}
      {!winner && noMoveLeft && <div>O and X tied</div>}
      {!winner && !noMoveLeft && <div>Next player is ${nextPlayer}</div>} */}
    </div>
  );
};

export default StatusMessage;
