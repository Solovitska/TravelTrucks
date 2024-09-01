import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import css from './BookCampervan.module.css';
import FormError from '../FormError/FormError';

// Validation Schema
const Schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  email: Yup.string()
    .email('Invalid email address!')
    .required('Required!'),
  bookingDate: Yup.date().required('Required!'),
  comment: Yup.string().max(150, 'Too Long!'),
});

const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  // Handle form submission
  const handleSubmit = (values, actions) => {
    // Assuming the data submission happens here
    console.log({
      name: values.name,
      email: values.email,
      bookingDate: values.bookingDate,
      comment: values.comment,
    });
    toast.success('Booking successful!');
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book Your Campervan Now</h3>
      <p className={css.formText}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <FormError name="name" />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <FormError name="email" />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
              />
              <FormError name="bookingDate" />
            </div>

            <div className={css.inputWrapper}>
              <Field
                className={css.textarea}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
              <FormError name="comment" />
            </div>

            <button type="submit" className={css.button}>Send</button>
            <Toaster position="top-center" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
