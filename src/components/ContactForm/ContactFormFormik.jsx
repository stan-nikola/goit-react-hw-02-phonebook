import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .min(
      4,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),

  number: yup
    .number()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

const initialValues = { name: '', number: '' };
export const ContactFormFormik = ({ onSubmit, contactsArr }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameArr = contactsArr.map(contact => contact.name);
    if (nameArr.includes(name)) {
      return alert('1111111');
    }
    onSubmit(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
