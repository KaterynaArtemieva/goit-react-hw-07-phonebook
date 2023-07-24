import PropTypes from 'prop-types';

export const Contact = ({ contact: { name, phone } }) => {
  return (
    <>
      {name}: {phone}
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};