import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './SideBarForm.module.css';
import { useId } from 'react';
import icons from '../../../assets/sprite.svg';
import SearchBtn from '../SearchBtn/SearchBtn.jsx';
import { changeFilter } from '../../../redux/filters/slice.js';

const validationSchema = Yup.object({
  location: Yup.string(),
  equipment: Yup.string(),
  type: Yup.string(),
});

const SideBarForm = () => {
  const values = { location: '', equipment: [], type: '' };
  const id = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    changeFilter({ location: values.location });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={css.containerLocation}>
          <h3 className={css.textLocation}>Location</h3>
          <div className={css.containerIcon}>
            <Field
              className={css.inputLocation}
              type="text"
              id={`location-${id}`}
              name="location"
              placeholder="Ukraine, Kyiv"
            ></Field>
            <svg
              className={css.iconLocation}
              width={20}
              height={20}
            >
              <use href={`${icons}#icon-Map`}></use>
            </svg>
          </div>
        </div>

        <p className={css.filtersText}>Filters</p>
        <h3 className={css.filtersTitle}>
          Vehicle equipment
        </h3>
        <div
          role="group"
          aria-labelledby="checkbox-group"
          className={css.filtersList}
        >
          <label className={css.filterDescription}>
            <Field
              className={css.filtersItem}
              type="checkbox"
              name="equipment"
              value="ac"
              id={`equipment-ac-${id}`}
            />
            <span className={css.filterSpan}>
              <div className={css.filterVehSpan}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-ac`}></use>
                </svg>
                AC
              </div>
            </span>
          </label>

          <label className={css.filterDescription}>
            <Field
              className={css.filtersItem}
              type="checkbox"
              name="equipment"
              value="automatic"
              id={`equipment-automatic-${id}`}
            />
            <span className={css.filterSpan}>
              <div className={css.filterVehSpan}>
                <svg width={32} height={32}>
                  <use
                    href={`${icons}#icon-automatic`}
                  ></use>
                </svg>
                Automatic
              </div>
            </span>
          </label>

          <label className={css.filterDescription}>
            <Field
              className={css.filtersItem}
              type="checkbox"
              name="equipment"
              value="kitchen"
              id={`equipment-kitchen-${id}`}
            />
            <span className={css.filterSpan}>
              <div className={css.filterVehSpan}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-kitchen`}></use>
                </svg>
                Kitchen
              </div>
            </span>
          </label>
          <label className={css.filterDescription}>
            <Field
              className={css.filtersItem}
              type="checkbox"
              name="equipment"
              value="tv"
              id={`equipment-tv-${id}`}
            />
            <span className={css.filterSpan}>
              <div className={css.filterVehSpan}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-tv`}></use>
                </svg>
                TV
              </div>
            </span>
          </label>
          <label className={css.filterDescription}>
            <Field
              className={css.filtersItem}
              type="checkbox"
              name="equipment"
              value="bathroom"
              id={`equipment-bathroom-${id}`}
            />
            <span className={css.filterSpan}>
              <div className={css.filterVehSpan}>
                <svg width={32} height={32}>
                  <use
                    href={`${icons}#icon-bathroom`}
                  ></use>
                </svg>
                Bathroom
              </div>
            </span>
          </label>
        </div>

        <h3 className={css.vehicleTypeTitle}>
          Vehicle type
        </h3>
        <div
          className={css.vehicleTypeList}
          role="group"
          aria-labelledby="radio-group"
        >
          <div className={css.customs}>
            <label className={css.vehicleTypeDescription}>
              <Field
                className={css.vehicleTypeItem}
                type="radio"
                name="type"
                value="van"
                id={`type-van-${id}`}
              />
              <span className={css.vehicleTypeSpan}>
                <div className={css.vehicleSpan}>
                  <svg width={32} height={32}>
                    <use href={`${icons}#icon-van`}></use>
                  </svg>
                  Van
                </div>
              </span>
            </label>
          </div>

          <label className={css.vehicleTypeDescription}>
            <Field
              className={css.vehicleTypeItem}
              type="radio"
              name="type"
              value="fullyIntegrated"
              id={`type-fully-integrated-${id}`}
            />
            <span className={css.vehicleTypeSpan}>
              <div className={css.vehicleSpan}>
                <svg width={32} height={32}>
                  <use
                    href={`${icons}#icon-fully-integrated`}
                  ></use>
                </svg>
                Fully Integrated
              </div>
            </span>
          </label>

          <label className={css.vehicleTypeDescription}>
            <Field
              className={css.vehicleTypeItem}
              type="radio"
              name="type"
              value="alcove"
              id={`type-alcove-${id}`}
            />
            <span className={css.vehicleTypeSpan}>
              <div className={css.vehicleSpan}>
                <svg width={32} height={32}>
                  <use href={`${icons}#icon-alcove`}></use>
                </svg>
                Alcove
              </div>
            </span>
          </label>
        </div>
        <SearchBtn />
      </Form>
    </Formik>
  );
};

export default SideBarForm;
