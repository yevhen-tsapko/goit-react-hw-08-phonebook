import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserManu/UserMenu';
export const Header = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};
