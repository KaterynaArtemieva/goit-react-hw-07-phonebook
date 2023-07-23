import PropTypes from 'prop-types';
import { BsTrash } from 'react-icons/bs';
import { ButtonA, ButtonD } from './Button.styled';

export const AddButton = () => {
  return <ButtonA>Save contact</ButtonA>;
};

export const DeleteButton = ({ type, contactId, contactDelete }) => {
  const handleDelBtn = () => {
    contactDelete(contactId);
  };
  return (
    <ButtonD type={type} onClick={handleDelBtn}>
      <BsTrash size={16} />
    </ButtonD>
  );
};

DeleteButton.propTypes = {
  type: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};