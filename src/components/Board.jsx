/* eslint-disable no-unused-vars */
import Square from './Square';
import { useState } from 'react';

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  console.log(square);
  const handleSquareClick = clickPosition => {
    if (square[clickPosition]) {
      return;
    }

    setSquare(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickPosition === position) {
          return isNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsNext(currentIsNext => !currentIsNext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
