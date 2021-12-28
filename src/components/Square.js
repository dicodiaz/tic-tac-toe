import { PropTypes } from 'prop-types';

const Square = ({ value, handleClickProp, highlight }) => (
  <button
    type="button"
    className={`square${highlight ? ' bg-success' : ''}`}
    onClick={handleClickProp}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  handleClickProp: PropTypes.func.isRequired,
  highlight: PropTypes.bool.isRequired,
};

Square.defaultProps = {
  value: null,
};

export default Square;
