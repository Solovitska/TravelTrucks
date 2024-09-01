import PropTypes from 'prop-types';
import Star from './Star.jsx';

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
