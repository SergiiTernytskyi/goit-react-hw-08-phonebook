import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { List, ListItem } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(item => (
        <ListItem key={item.id}>
          <ContactItem contact={item} />
        </ListItem>
      ))}
    </List>
  );
};
