import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, Flex, Text, Circle } from '@chakra-ui/react';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Flex gap="15" align="center">
      <Circle bg={'blue'} size={10}>
        {user.name.toUpperCase()[0]}
      </Circle>
      <Text color="grey">Welcome, {user.name}</Text>
      <Button
        fontSize={20}
        fontWeight={500}
        bg={'inherit'}
        p="2"
        borderRadius={4}
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </Button>
    </Flex>
  );
};
