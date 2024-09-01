import css from './Features.module.css';
import { TbGasStation } from 'react-icons/tb';
import { BsDroplet } from 'react-icons/bs';
import { PiWindLight } from 'react-icons/pi';
import { BsCupHot } from 'react-icons/bs';
import { MdTv } from 'react-icons/md';
import { BsDiagram3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors.js';
import BookCampervan from '../BookCampervan/BookCampervan.jsx';

const Features = () => {
  const camper = useSelector(selectCamperById);

  return (
    <>
      <div className={css.featuresContainer}>
        <div className={css.container}>
          <div className={css.camperEquipment}>
            {camper.transmission ? (
              <div className={css.camperEquipmentItem}>
                <BsDiagram3 width={20} height={20} />
                automatic
              </div>
            ) : null}
            {camper.engine ? (
              <div className={css.camperEquipmentItem}>
                <TbGasStation width={20} height={20} />
                {camper.engine}
              </div>
            ) : null}
            {camper.kitchen ? (
              <div className={css.camperEquipmentItem}>
                <BsCupHot width={20} height={20} />
                kitchen
              </div>
            ) : null}
            {camper.bathroom ? (
              <div className={css.camperEquipmentItem}>
                <BsDroplet width={20} height={20} />
                bathroom
              </div>
            ) : null}
            {camper.AC ? (
              <div className={css.camperEquipmentItem}>
                <PiWindLight width={20} height={20} />
                AC
              </div>
            ) : null}
            {camper.TV ? (
              <div className={css.camperEquipmentItem}>
                <MdTv width={20} height={20} />
                TV
              </div>
            ) : null}
          </div>
          <h3 className={css.detailsVehicleTitle}>
            Vehicle details
          </h3>
          <hr className={css.detailsLine} />
          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Form
            </h4>
            <p className={css.detailsContainerText}>
              {camper.form}
            </p>
          </div>
          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Length
            </h4>
            <p className={css.detailsContainerText}>
              {camper.length}
            </p>
          </div>
          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Width
            </h4>
            <p className={css.detailsContainerText}>
              {camper.width}
            </p>
          </div>
          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Height
            </h4>
            <p className={css.detailsContainerText}>
              {camper.height}
            </p>
          </div>

          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Tank
            </h4>
            <p className={css.detailsContainerText}>
              {camper.tank}
            </p>
          </div>
          <div className={css.detailsContainer}>
            <h4 className={css.detailsContainerTitle}>
              Consumption
            </h4>
            <p className={css.detailsContainerText}>
              {camper.consumption}
            </p>
          </div>
        </div>
        <BookCampervan />
      </div>
    </>
  );
};

export default Features;
