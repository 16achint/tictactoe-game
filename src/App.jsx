import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import { calcualteWinner } from './winner';
import StatusMessage from './components/statusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calcualteWinner(squares);

  console.log(squares);
  const handleSquareClick = clickPosition => {
    if (squares[clickPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickPosition === position) {
          return isNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isNext={isNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
