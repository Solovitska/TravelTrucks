import { useSelector } from 'react-redux';
import css from './Reviews.module.css';
import { selectCamperById } from '../../redux/campers/selectors.js';
import StarRating from '../StarRating/StarRating.jsx';
import BookCampervan from '../BookCampervan/BookCampervan.jsx';

const Reviews = () => {
  const camper = useSelector(selectCamperById);
  if (!camper || !camper.reviews) {
    return <p>No data</p>;
  }

  return (
    <>
      <div className={css.reviewsContainer}>
        <div>
          {camper.reviews.map((review, index) => (
            <div
              key={index}
              className={css.containerReviews}
            >
              <div className={css.containerName}>
                <div className={css.imageName}>
                  {review.reviewer_name[0]}
                </div>
                <div>
                  <h3>{review.reviewer_name}</h3>
                  <p>
                    <StarRating
                      rating={review.reviewer_rating}
                    />
                  </p>
                </div>
              </div>

              <p className={css.reviewComment}>
                {review.comment}
              </p>
            </div>
          ))}
        </div>
        <BookCampervan />
      </div>
    </>
  );
};

export default Reviews;
