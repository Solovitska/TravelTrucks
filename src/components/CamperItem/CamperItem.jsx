import { useSelector } from 'react-redux';
import css from './CamperItem.module.css';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { selectCamperById } from '../../redux/campers/selectors.js';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import { Suspense } from 'react';
import clsx from 'clsx';

const CamperItem = () => {
  const camper = useSelector(selectCamperById);

  if (!camper) {
    return <Loader />; 
  }

  const buildCamperLinkClass = ({ isActive }) => {
    return clsx(
      css.navLink,
      isActive && css.navLinkActive
    );
  };

  return (
    <div className={css.camperDetailsContainer}>
      <div className={css.camperTitleContainer}>
        <h2 className={css.camperTitle}>{camper.name}</h2>
      </div>
      <div className={css.camperReviewAndLocation}>
        <div className={css.reviewSection}>
          <FaStar fill="#FFC531" />
          <p>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
        </div>
        <div className={css.locationSection}>
          <BsMap width={16} height={16} />
          <p>{camper.location}</p>
        </div>
      </div>
      <p className={css.camperCost}>€{camper.price}</p>
      <div className={css.camperImageGallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            className={css.camperImage}
            width={350}
            height={350}
            src={image.thumb}
            alt={camper.description}
          />
        ))}
      </div>
      <p className={css.camperDescriptionText}>
        {camper.description}
      </p>

      <div className={css.navLinksContainer}>
        <NavLink
          className={buildCamperLinkClass}
          to="features"
        >
          <h3>Features</h3>
        </NavLink>
        <NavLink
          className={buildCamperLinkClass}
          to="reviews"
        >
          <h3>Reviews</h3>
        </NavLink>
      </div>
      <hr className={css.dividerLine} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CamperItem;
