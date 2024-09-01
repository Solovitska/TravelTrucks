import AppTravel from '../../components/AppTravel/AppTravel.jsx';
import { useDispatch, useSelector } from 'react-redux';
import CamperItem from '../../components/CamperItem/CamperItem.jsx';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations.js';
import {
  selectCamperById,
  selectStatus,
} from '../../redux/campers/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper || !camper.name) {
    return <Loader />;
  }

  return (
    <>
      <AppTravel/>
      {status === 'loading' ? <Loader /> : <CamperItem />}
    </>
  );
};

export default CamperPage;
