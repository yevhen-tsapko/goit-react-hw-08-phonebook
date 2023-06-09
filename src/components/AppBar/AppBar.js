import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'redux/auth/selectors';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserManu/UserMenu';
export const Header = () => {
  const isLogIn = useSelector(selectIsLogIn);
  return (
    <header>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};
