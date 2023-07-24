import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading, selectError } from 'redux/сontacts/contactsSelectors';
import { fetchContacts } from 'redux/сontacts/contactsOperation';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p> {error} </p>}
        {!isLoading && !error && <ContactList />}
      </div>
    </Section>
  );
};
