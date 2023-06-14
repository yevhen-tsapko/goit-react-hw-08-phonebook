import { Box, Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Box
      as="form"
      m={10}
      p={10}
      onSubmit={handleSubmit}
      autoComplete="off"
      border="1px"
      borderColor="black"
      width="50%"
    >
      <Box as="label" display="block" fontSize={20}>
        Name
        <Input type="text" name="name" bg="white"></Input>
      </Box>
      <Box as="label" display="block" mt={5} fontSize={20}>
        Email
        <Input type="email" name="email" bg="white"></Input>
      </Box>
      <Box as="label" display="block" mt={5} fontSize={20}>
        Password
        <Input type="password" name="password" bg="white"></Input>
      </Box>
      <Button
        type="submit"
        display={'block'}
        mt={5}
        bg="black"
        p={2}
        color="white"
        borderRadius={5}
        mr="auto"
        ml="auto"
      >
        Sign up
      </Button>
    </Box>
  );
};
