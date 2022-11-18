import PropTypes from 'prop-types';
import { BsFillXCircleFill } from 'react-icons/bs';
import { ContactItem, ContactBtn, ContactName } from './ContactList.styled';
import { Box } from './../Box/Box';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box
      as="ul"
      bg="third"
      borderRadius="normal"
      boxShadow="items"
      p={2}
      minWidth={296}
    >
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactName>{name}:</ContactName>
            {number}
            <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
              <BsFillXCircleFill />
            </ContactBtn>
          </ContactItem>
        );
      })}
    </Box>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
