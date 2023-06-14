import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Flex as="nav" gap="15">
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Flex>
  );
};
