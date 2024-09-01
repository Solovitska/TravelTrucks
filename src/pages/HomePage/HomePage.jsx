import { Link } from 'react-router-dom';
import AppBar from '../../components/AppTravel/AppTravel';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <AppBar />
      <div className={css.heroSection}>
        <div className={css.titleContainer}>
          <h1 className={css.heroTitle}>
            Campers of your dreams
          </h1>
          <h2 className={css.heroSectionTitle}>
            You can find everything you want in our catalog
          </h2>
        </div>

        <Link to="/catalog">
          <button className={css.heroBtn}>View Now</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
