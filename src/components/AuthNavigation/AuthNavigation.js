import { NavLink } from 'react-router-dom';
export const AuthNavigation = () => {
  return (
    <div>
      <NavLink to="/logIn">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};
