import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Board from './components/Board';

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
        return [squares[a], lines[i]];
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
    const desc = step ? (
      <span>
        Go to move #{step}
        <br className="d-md-none" />
        (Col: {y}, Row: {x})
      </span>
    ) : (
      'Go to game start'
    );
    return (
      <div key={move.squares.join('')}>
        <Button
          className={`mb-1 ${step === stepNumber ? ' fw-bold' : ''}`}
          onClick={() => jumpTo(step)}
          size="sm"
          variant="secondary"
        >
          {desc}
        </Button>
      </div>
    );
  });

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) status = `Winner: ${winner[0]}`;
  else if (current.squares.every((elem) => elem)) status = 'Draw';
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <Container as="main" className="min-vh-100 d-flex flex-column justify-content-center pt-5">
      <Row className="mx-0 justify-content-center" rows={2}>
        <Col className="d-flex justify-content-end align-items-center">
          <Board
            squares={current.squares}
            winnerSquares={winner ? winner[1] : []}
            handleClickProp={(i) => handleClick(i)}
          />
        </Col>
        <Col>
          <Button onClick={() => setSortAscending((prev) => !prev)}>
            Sort: {sortAscending ? 'Ascending' : 'Descending'}
          </Button>
          <p className="lead my-2">{status}</p>
          <ul className={`mb-0 list-unstyled d-flex flex-column${sortAscending ? '' : '-reverse'}`}>
            {moves}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
