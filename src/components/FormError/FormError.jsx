import PropTypes from 'prop-types';
import { useField } from "formik";
import css from "./FormError.module.css";

const FormError = ({ name }) => {
  const [, meta] = useField(name);

  if (!meta.touched) return null;

  return meta.error ? <div className={css.error}>{meta.error}</div> : null;
};

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormError;
