import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';

import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { AddButton, Error, Input, Label, StyledForm } from './EditForm.styled';
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

export const EditForm = ({ contactId, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContact = contacts.find(contact => contact.id === contactId);

  const submitHandler = ({ name, number }, { resetForm }) => {
    dispatch(editContact({ contactId, name, number }));
    onClose();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: filteredContact.name,
          number: filteredContact.number,
        }}
        onSubmit={submitHandler}
        validationSchema={contactsSchema}
      >
        <StyledForm autoComplete="off">
          <Title>Edit contact</Title>

          <Label>
            Contact name
            <Input type="text" name="name" required="required" />
          </Label>

          <Label>
            Contact number
            <Input type="tel" name="number" required="required" />
          </Label>

          <AddButton type="submit">Confirm</AddButton>
          <ErrorMessage component={Error} name="name" />
          <ErrorMessage component={Error} name="number" />
        </StyledForm>
      </Formik>
    </div>
  );
};

EditForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
