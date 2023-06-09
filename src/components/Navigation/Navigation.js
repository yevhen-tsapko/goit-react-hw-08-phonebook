import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLogIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogIn} && <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
