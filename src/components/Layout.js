import { Outlet } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <Box m="10" p="5" bg="lightgreen">
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
