import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { MdOutlineContactPhone } from 'react-icons/md';
import { mask, phoneRegExp } from 'constants/phoneValidate';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions } from 'options/toastOptions';

import 'react-toastify/dist/ReactToastify.css';
import {
  PbForm,
  Label,
  LabelName,
  InputField,
  ErrorMessageField,
  SubmitBtn,
  InputMaskField,
} from './ContactFormFormik.styled';

const schema = yup.object({
  name: yup
    .string()
    .min(4, 'Name must be at least 4 letters long')
    .max(16, 'Name must be not longer than 16 letters')
    .required(
      "Please type name. For example Adrian, Jacob Mercer, Charles de Batz, Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please type phone number')
    .matches(phoneRegExp, 'Phone number is not valid'),
});

const initialValues = { name: '', number: '' };

export const ContactFormFormik = ({ onSubmit, contactsArr }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameArr = contactsArr.map(contact => contact.name);
    if (nameArr.includes(name)) {
      return toast.warn(`${name} is already in contacts.`, toastOptions);
    }
    onSubmit(name, number);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <PbForm>
          <Label>
            <LabelName>Name</LabelName>
            <InputField type="text" name="name" placeholder="Bruce Lee" />
            <ErrorMessageField name="name" component="div" />
          </Label>
          <Label>
            <LabelName>Number</LabelName>
            <InputField name="number">
              {({ field }) => (
                <InputMaskField
                  {...field}
                  mask={mask}
                  placeholder="(012)-345-6789"
                  type="tel"
                />
              )}
            </InputField>

            <ErrorMessageField name="number" component="div" />
          </Label>
          <SubmitBtn type="submit">
            <MdOutlineContactPhone />
            Add contact
          </SubmitBtn>
        </PbForm>
      </Formik>
      <ToastContainer />
    </>
  );
};

ContactFormFormik.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactsArr: PropTypes.array.isRequired,
};
