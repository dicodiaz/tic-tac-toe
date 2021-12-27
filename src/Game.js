import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Board from './components/Board';

/* TODO:
When someone wins, highlight the three squares that caused the win.
When no one wins, display a message about the result being a draw. */

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: [...Array(9).fill(null)],
      location: ['Easter', 'Egg'],
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);

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
    const location = [Math.floor(i / 3), i % 3];
    setHistory([
      ...newHistory,
      {
        squares: newSquares,
        location,
      },
    ]);
    setXIsNext((prev) => !prev);
    setStepNumber(newHistory.length);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((move, step) => {
    const [x, y] = move.location;
    const desc = step ? `Go to move #${step}: (${y}, ${x})` : 'Go to game start';
    const boldSelected = step === stepNumber ? 'fw-bold' : '';
    return (
      <li key={move.squares.join('')}>
        <button className={boldSelected} type="button" onClick={() => jumpTo(step)}>
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
    <Container as="main" className="min-vh-100 d-flex flex-column justify-content-center">
      <Row className="mx-0 justify-content-center" rows={2}>
        <Col className="d-flex justify-content-end">
          <Board squares={current.squares} handleClickProp={(i) => handleClick(i)} />
        </Col>
        <Col>
          <Button onClick={() => setSortAscending((prev) => !prev)}>
            Sort: {sortAscending ? 'Ascending' : 'Descending'}
          </Button>
          <div>{status}</div>
          <ol className={`d-flex flex-column${sortAscending ? '' : '-reverse'}`}>{moves}</ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
