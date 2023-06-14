import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export const AuthNavigation = () => {
  return (
    <Flex gap={15}>
      <Link as={NavLink} _activeLink={{ color: 'blue' }} to="/logIn">
        Log In
      </Link>
      <Link as={NavLink} _activeLink={{ color: 'blue' }} to="/register">
        Register
      </Link>
    </Flex>
  );
};
