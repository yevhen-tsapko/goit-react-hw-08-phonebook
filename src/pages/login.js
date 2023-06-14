import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Center, Input } from '@chakra-ui/react';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      as="form"
      border="1px"
      m={10}
      p={10}
      onSubmit={handleSubmit}
      autoComplete="off"
      borderColor="black"
      width="50%"
    >
      <Box as="label" display="block" mt={5} fontSize={20}>
        Email
        <Input type="email" name="email"></Input>
      </Box>
      <Box as="label" display="block" mt={5} fontSize={20}>
        Password
        <Input type="password" name="password"></Input>
      </Box>
      <Center
        as="button"
        mt={5}
        bg="black"
        p={2}
        color="white"
        borderRadius={5}
        mr="auto"
        ml="auto"
      >
        Log in
      </Center>
    </Box>
  );
};
