import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DeleteButton } from './ContactList.styled';
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
        <ul>
          {contactsList.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
              <DeleteButton
                type="button"
                data-id={id}
                onClick={evt => {
                  dispatch(deleteContact(evt.currentTarget.dataset.id));
                }}
              >
                Delete
              </DeleteButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
