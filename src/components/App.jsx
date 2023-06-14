import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
// import { HomePage } from 'pages/home';
// const HomePage = lazy(() => import('pages/home'));
// import { RegisterPage } from 'pages/register';
// import { LoginPage } from 'pages/login';
// import { ContactsPage } from 'pages/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
const HomePage = lazy(() => import('pages/home'));
const RegisterPage = lazy(() => import('pages/register'));
const LoginPage = lazy(() => import('pages/login'));
const ContactsPage = lazy(() => import('pages/contacts'));
export const App = () => {
  const { isRefreshing } = useSelector(selectAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        ></Route>
      </Route>
    </Routes>
  );
};
