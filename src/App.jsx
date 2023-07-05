/* eslint-disable no-unused-vars */
import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import { calcualteWinner } from './components/winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calcualteWinner(squares);
  const nextPlayer = isNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

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
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}
export default App;
