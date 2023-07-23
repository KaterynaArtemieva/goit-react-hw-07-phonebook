import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { addContact, deleteContact } from 'redux/сontacts/contactsSlice';
import { filterContacts } from 'redux/filter/filterSlice';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNewContact = contact => {
    if (contact.name && contact.number) {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      contacts.some(({ name }) => name === contact.name)
        ? Notify.failure(`${contact.name} is already in contacts!`)
        : dispatch(addContact(newContact));
    } else {
      Notify.failure(`Fill in all the fields!`);
    }
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  const filtration = filterKey => {
    dispatch(filterContacts(filterKey));
  };

  return (
    <Section>
      <ContactForm addNewContact={addNewContact} />
      <Filter filtration={filtration} />
      <ContactList contactDelete={contactDelete} />
    </Section>
  );
};