import { PropTypes } from 'prop-types';
import Square from './Square';

const Board = ({ squares, handleClickProp }) => {
  const renderSquare = (i) => (
    <Square value={squares[i]} handleClickProp={() => handleClickProp(i)} />
  );

  return (
    <div>
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

Board.propTypes = {
  squares: PropTypes.arrayOf(String).isRequired,
  handleClickProp: PropTypes.func.isRequired,
};

export default Board;
