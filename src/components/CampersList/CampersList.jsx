import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors.js';
import css from './CampersList.module.css';
import Camper from '../Camper/Camper.jsx';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map(item => (
        <li key={item.id} className={css.campersItem}>
          <Camper item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
