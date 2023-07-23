import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage, Field } from './ContactForm.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../Button/Button';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(nameRegExp, 'Name is not valid')
    .required('Required field!'),
  number: Yup.string()
    .trim()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required field!'),
});

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleContactInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    onFormReset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
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
          Number
          <Field
            name="number"
            value={number}
            type="tel"
            onChange={handleContactInput}
          />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <AddButton type="submit" />
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};