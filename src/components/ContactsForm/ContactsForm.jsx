import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';

import {
  AddButton,
  Error,
  Input,
  InputWrapper,
  Placeholder,
  StyledForm,
  Wrapper,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Title } from 'components/Title/Title';

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("That doesn't look like a contact name")
    .trim()
    .required('Contact name is required'),
  number: yup
    .string()
    .phone(
      'UA',
      true,
      'Number must be a valid phone number (+380 XX XXX XX XX)'
    )
    .required('Contact phone number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitHandler = ({ name, number }, { resetForm }) => {
    const normilizedContacts = {
      name: name.trim(),
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      return toast.error(`${name} is already in your contacts`);
    }

    dispatch(addContact(normilizedContacts));
    resetForm();
    onClose();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={contactsSchema}
      >
        <StyledForm autoComplete="off">
          <Title>Add contact</Title>
          <Wrapper>
            <InputWrapper>
              <Input type="text" name="name" required="required" />
              <Placeholder>Contact name</Placeholder>
            </InputWrapper>
            <InputWrapper>
              <Input type="tel" name="number" required="required" />
              <Placeholder>Phone number</Placeholder>
            </InputWrapper>
          </Wrapper>

          <AddButton type="submit">Add contact</AddButton>
          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="number" />
        </StyledForm>
      </Formik>
    </>
  );
};

ContactsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
