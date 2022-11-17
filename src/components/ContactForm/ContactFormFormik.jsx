import { Formik } from 'formik';
import { MdOutlineContactPhone } from 'react-icons/md';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PbForm,
  Label,
  LabelName,
  InputField,
  ErrorMessageField,
  SubmitBtn,
} from './ContactFormFormik.styled';
import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
  name: yup
    .string()
    .min(4, 'Name must be at least 4 letters long')
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required(
      'Phone number must be min 6 digits can contain dashes. Phone number cant contains spaces and cant start with +'
    )
    .matches(phoneRegExp, 'Phone number is not valid'),
});

const initialValues = { name: '', number: '' };
export const ContactFormFormik = ({ onSubmit, contactsArr }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameArr = contactsArr.map(contact => contact.name);
    if (nameArr.includes(name)) {
      return toast.warn(`${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
            <InputField type="text" name="name" />
            <ErrorMessageField name="name" component="div" />
          </Label>
          <Label>
            <LabelName>Number</LabelName>
            <InputField name="number" type="tel" />
            <ErrorMessageField name="number" component="div" />
          </Label>
          <SubmitBtn type="submit">
            <MdOutlineContactPhone />
            Add contact
          </SubmitBtn>
        </PbForm>
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
};
