import { useDispatch } from 'react-redux';
import { fetchContacts, addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Box, Input } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const checkContactName = (name, contacts) =>
  contacts.some(el => el.name === name);
export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const data = evt.currentTarget.elements;
    if (checkContactName(data.name.value, items)) {
      alert(`${data.name.value} is alredy in contacts`);
    } else {
      dispatch(
        addContact({
          name: data.name.value,
          number: data.number.value,
        })
      );
      dispatch(fetchContacts());
    }

    evt.currentTarget.reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} maxW="50%">
      <Box as="label" display="block" fontSize={20}>
        Name
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          bg={'white'}
        />
      </Box>
      <Box as="label" display="block" fontSize={20} mt={2}>
        Number
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          bg={'white'}
        />
      </Box>
      <IconButton
        as="button"
        type="submit"
        icon={<AddIcon />}
        mt={4}
        color={'black'}
        colorScheme="blue"
      />
    </Box>
  );
};
