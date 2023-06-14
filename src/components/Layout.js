import { Outlet } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { Box } from '@chakra-ui/react';
export const Layout = () => {
  return (
    <Box m="10" p="5" bg="lightgreen">
      <Header />
      <Outlet />
    </Box>
  );
};
