import { Outlet } from 'react-router-dom';
import { Header } from './AppBar/AppBar';
export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
