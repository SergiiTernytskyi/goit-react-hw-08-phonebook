import { Formik, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';

import {
  AddButton,
  Input,
  Label,
  StyledForm,
  Wrapper,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Title } from 'components/Title/Title';
import { WarningMessage } from 'components/WarningMessage/WarningMessage';

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
            <Label>
              Contact name
              <Input type="text" name="name" placeholder="Enter contact name" />
            </Label>

            <Label>
              Phone number
              <Input
                type="tel"
                name="number"
                placeholder="Enter contact number"
              />
            </Label>
          </Wrapper>

          <AddButton type="submit">Add contact</AddButton>
          <ErrorMessage component={WarningMessage} name="name" />
          <ErrorMessage component={WarningMessage} name="number" />
        </StyledForm>
      </Formik>
    </>
  );
};

ContactsForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
