import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { List, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsList } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading, error } = useSelector(selectContacts);

  const contactsList = useSelector(selectContactsList);
  return (
    <div>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {contactsList.length > 0 && (
        <List>
          {contactsList.map(({ name, number, id }) => (
            <ListItem fontSize="26px" key={id}>
              {name}: {number}
              <IconButton
                colorScheme="blue"
                size="sm"
                // w={'20px'}
                ml={3}
                aria-label="Delete contact"
                borderRadius={'50%'}
                icon={<CloseIcon boxSize="10px" color={'black'} />}
                type="button"
                data-id={id}
                onClick={evt => {
                  dispatch(deleteContact(evt.currentTarget.dataset.id));
                }}
              ></IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
