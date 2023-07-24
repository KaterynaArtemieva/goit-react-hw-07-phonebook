import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectLoading,
  selectError,
} from 'redux/сontacts/contactsSelectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/сontacts/contactsOperation';
import { filterContacts } from 'redux/filter/filterSlice';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    contacts.some(({ name }) => name === contact.name)
      ? Notify.failure(`${contact.name} is already in contacts!`)
      : dispatch(addContact(newContact));
  };

  const filtration = filterKey => {
    dispatch(filterContacts(filterKey));
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <div>
        <h2>Contacts</h2>
        <Filter filtration={filtration} />
        {isLoading && <p>Loading...</p>}
        {error && <p> {error} </p>}
        {!isLoading && !error && <ContactList contactDelete={contactDelete} />}
      </div>
    </Section>
  );
};
