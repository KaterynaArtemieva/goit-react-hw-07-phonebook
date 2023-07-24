import { useSelector, useDispatch } from 'react-redux';
import { ContactListSt } from './ContactsList.styled';
import { ContactSt } from 'components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/сontacts/contactsOperation';
import { BsTrash } from 'react-icons/bs';
import { ButtonD } from 'components/Button/Button.styled';
import { selectFilteredContacts } from 'redux/сontacts/contactsSelectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListSt>
      {contacts.map(contact => (
        <ContactSt key={contact.id}>
          <p>{contact.name}: </p>
          <p>{contact.phone}</p>
          <ButtonD
            type="button"
            name="delete"
            onClick={() => contactDelete(contact.id)}
          >
            <BsTrash size={16} />
          </ButtonD>
        </ContactSt>
      ))}
    </ContactListSt>
  );
};
