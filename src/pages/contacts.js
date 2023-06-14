import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Center, Heading } from '@chakra-ui/react';
export const ContactsPage = () => {
  return (
    <div>
      <Heading size={'lg'} textAlign="center">
        Adding contact
      </Heading>

      <ContactForm />
      <Heading size={'lg'} textAlign="center" textTransform={'uppercase'}>
        Contacts
      </Heading>
      <Filter />

      <ContactList />
    </div>
  );
};
