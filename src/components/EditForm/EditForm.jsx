import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';

import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { EditButton, Input, Label, StyledForm } from './EditForm.styled';
import { Title } from 'components/Title/Title';
import { WarningMessage } from 'components/WarningMessage/WarningMessage';
import { toast } from 'react-hot-toast';

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

  const submitHandler = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      return toast.error(`${name} is already in your contacts`);
    }

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
            <Input type="text" name="name" />
          </Label>

          <Label>
            Contact number
            <Input type="tel" name="number" />
          </Label>

          <EditButton type="submit">Confirm</EditButton>
          <ErrorMessage component={WarningMessage} name="name" />
          <ErrorMessage component={WarningMessage} name="number" />
        </StyledForm>
      </Formik>
    </div>
  );
};

EditForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
