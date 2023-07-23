import PropTypes from 'prop-types';
import { FormField, Field } from './Filter.styled';

export const Filter = ({ filtration }) => {
  const handleFilterInput = ({ target: { value } }) => {
    filtration(value.toLowerCase());
  };

  return (
    <FormField>
      Find contacts by name
      <Field
        type="text"
        name="filter"
        required
        onChange={e => handleFilterInput(e)}
      />
    </FormField>
  );
};

Filter.propTypes = {
  filtration: PropTypes.func.isRequired,
};