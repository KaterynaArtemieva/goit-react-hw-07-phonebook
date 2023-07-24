import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, Field } from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux/сontacts/contactsOperation';
import { selectContacts } from 'redux/сontacts/contactsSelectors';
import { ButtonA } from 'components/Button/Button.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(nameRegExp, 'Name is not valid')
    .required('Required field!'),
  phone: Yup.string()
    .trim()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required field!'),
});

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleContactInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isInContacts) {
      Notify.failure(`${form.elements.name.value} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={ContactSchema}
    >
      <Form onSubmit={e => handleOnSubmit(e)}>
        <FormField>
          Name
          <Field
            name="name"
            value={name}
            type="text"
            onChange={handleContactInput}
          />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Phone
          <Field
            name="phone"
            value={phone}
            type="tel"
            onChange={handleContactInput}
          />
          <ErrorMessage name="phone" component="div" />
        </FormField>
        <ButtonA type="submit">Save contact</ButtonA>
      </Form>
    </Formik>
  );
};
