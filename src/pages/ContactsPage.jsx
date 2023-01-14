import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { ContactList } from 'components/ContactsList/ContactsList';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Button } from 'components/Button/Button';

const Contacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <main>
      <Button type="button" onClick={() => setShowModal(true)}>
        Add contact
      </Button>
      <FilterForm />
      {items.length === 0 && isLoading && <Loader />}
      {items.length === 0 && !isLoading && !error && (
        <div>There is no contacts yet</div>
      )}
      {items.length > 0 && <ContactList />}
      {error && <div>{error}</div>}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {<ContactsForm onClose={() => setShowModal(false)} />}
        </Modal>
      )}
    </main>
  );
};

export default Contacts;
