import { PropTypes } from 'prop-types';
import Square from './Square';

const Board = ({ squares, handleClickProp }) => {
  const renderSquare = (i) => (
    <Square value={squares[i]} handleClickProp={() => handleClickProp(i)} />
  );

  return (
    <div>
      {[...Array(3).keys()].map((i) => (
        <div key={i}>{[...Array(3).keys()].map((j) => renderSquare(3 * i + j))}</div>
      ))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(String).isRequired,
  handleClickProp: PropTypes.func.isRequired,
};

export default Board;
