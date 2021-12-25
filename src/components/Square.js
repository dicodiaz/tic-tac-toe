import { PropTypes } from 'prop-types';

const Square = ({ value, handleClickProp }) => (
  <button type="button" className="square" onClick={handleClickProp}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  handleClickProp: PropTypes.func.isRequired,
};

Square.defaultProps = {
  value: null,
};

export default Square;
