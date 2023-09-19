import PropTypes from 'prop-types';
import ContactItem from './ContactItem';



export default function Contacts({ contacts }) {


  return (
    <>
      <ul>
        {contacts.map(({ name, id, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              phone={phone}
            />
          );
        })}
      </ul>
    </>
  );
}

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
