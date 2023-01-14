import { EditForm } from 'components/EditForm/EditForm';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegTrashAlt, FaCog } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import {
  ButtonsWrapper,
  ContactName,
  ContactPhone,
  IconButton,
  Wrapper,
} from './ContactsItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const deleteContactHandler = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Wrapper>
        <ContactName>{name}:</ContactName>
        <ContactPhone>{number}</ContactPhone>

        <ButtonsWrapper>
          <IconButton
            type="button"
            aria-label="modify"
            onClick={() => setShowModal(true)}
          >
            <FaCog size={25} />
          </IconButton>
          <IconButton
            type="button"
            aria-label="delete"
            onClick={deleteContactHandler}
          >
            <FaRegTrashAlt size={25} />
          </IconButton>
        </ButtonsWrapper>
      </Wrapper>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {<EditForm contactId={id} onClose={() => setShowModal(false)} />}
        </Modal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
