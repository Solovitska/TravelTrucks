import PropTypes from 'prop-types';
import css from './Star.module.css';
import { FaStar } from 'react-icons/fa';

const Star = ({ filled }) => {
  return (
    <div className={css.star}>
      <FaStar color={filled ? '#FFD700' : '#e4e5e9'} />
    </div>
  );
};

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Star;
