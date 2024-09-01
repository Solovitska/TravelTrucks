import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.load}>
      <ColorRing
        visible={true}
        height="60"
        width="60"
        ariaLabel="color-ring-loading"
        wrapperClass="color-ring-wrapper"
        colors={[
          '#e15b64',
          '#f47e60',
          '#f8b26a',
          '#abbd81',
          '#849b87',
        ]}
      />
    </div>
  );
};
export default Loader;
