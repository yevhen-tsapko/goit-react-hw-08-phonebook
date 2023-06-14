import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

import { Flex, Link } from '@chakra-ui/react';
export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Flex as="nav" gap="15">
      <Link as={NavLink} to="/" _activeLink={{ color: 'blue' }}>
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} to="/contacts" _activeLink={{ color: 'blue' }}>
          Contacts
        </Link>
      )}
    </Flex>
  );
};
