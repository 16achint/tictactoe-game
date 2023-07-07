import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
import { calcualteWinner } from './winner';
import StatusMessage from './components/statusMessage';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, SetCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calcualteWinner(gamingBoard.squares);

  console.log({ history, currentMove });

  const handleSquareClick = clickPosition => {
    if (gamingBoard.squares[clickPosition] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    SetCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    SetCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    SetCurrentMove(0);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? `active` : ''}`}
      >
        Start New Game
      </button>
      <h3>Current game history</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}
export default App;
