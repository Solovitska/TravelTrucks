import PropTypes from 'prop-types';
import sprite from "../../assets/spritetravel.svg";

const Icons = ({ width, height, iconName, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Icons.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icons;
