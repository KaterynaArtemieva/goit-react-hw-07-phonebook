import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormicField,
} from 'formik';

export const Form = styled(FormikForm)`
  font-size: large;
  font-weight: 500;
  color: rgb(124 136 148);
  margin: 16px 0;
  width: 400px;
  padding: 12px;
  border: 1px solid #c1d6e9;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  gap: 8px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const Field = styled(FormicField)`
  border: 1px solid #c1d6e9;
  color: rgb(124 136 148);
  width: 100%;
`;