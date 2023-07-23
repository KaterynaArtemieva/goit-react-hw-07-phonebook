import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Contact } from 'components/ContactItem/ContactItem';
import { DeleteButton } from '../Button/Button';
import { ContactListSt } from './ContactsList.styled';
import { ContactSt } from 'components/ContactItem/ContactItem.styled';

export const ContactList = ({ contactDelete }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return (
    <ContactListSt>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <ContactSt key={contact.id}>
            <Contact contact={contact} />
            <DeleteButton
              type="button"
              contactDelete={contactDelete}
              contactId={contact.id}
            />
          </ContactSt>
        ))}
    </ContactListSt>
  );
};

ContactList.propTypes = {
  contactDelete: PropTypes.func.isRequired,
};