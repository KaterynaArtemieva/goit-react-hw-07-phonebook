import { useSelector, useDispatch } from 'react-redux';
import { FormField, Field } from './Filter.styled';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/сontacts/contactsSelectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FormField htmlFor="filter">
      Find contacts by name
      <Field
        id="filter"
        type="text"
        name="filter"
        required
        onChange={handleFilterInput}
        value={filter}
      />
    </FormField>
  );
};
