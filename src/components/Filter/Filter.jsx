import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Box, Heading, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterName = evt => {
    const filterValue = evt.target.value.trim().toLowerCase();
    dispatch(setFilter(filterValue));
  };
  return (
    <Box as="label" display="block" fontSize={20} maxW={'50%'}>
      <Heading size={'md'} mb={3}>
        Find contacts by name
      </Heading>
      <Input type="text" onChange={handleFilterName} bg={'white'} />
    </Box>
  );
};
