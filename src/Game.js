import { useState } from 'react';
import Board from './components/Board';

/* TODO:
Display the location for each move in the format (col, row) in the move history list.
Bold the currently selected item in the move list.
Rewrite Board to use two loops to make the squares instead of hardcoding them.
Add a toggle button that lets you sort the moves in either ascending or descending order.
When someone wins, highlight the three squares that caused the win.
When no one wins, display a message about the result being a draw. */

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: [...Array(9).fill(null)],
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const newSquares = [...current.squares];
    if (calculateWinner(newSquares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory((prevHistory) => [...prevHistory, { squares: newSquares }]);
    setXIsNext((prev) => !prev);
    setStepNumber(newHistory.length);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={step.squares.join('')}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClickProp={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
