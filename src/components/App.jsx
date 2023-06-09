import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from 'pages/home';
import { RegisterPage } from 'pages/register';
import { LoginPage } from 'pages/login';
import { ContactsPage } from 'pages/contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
