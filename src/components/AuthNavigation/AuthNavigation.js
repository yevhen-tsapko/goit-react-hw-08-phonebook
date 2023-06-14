import { Center, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <Flex gap={15}>
      <NavLink to="/logIn">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </Flex>
  );
};
