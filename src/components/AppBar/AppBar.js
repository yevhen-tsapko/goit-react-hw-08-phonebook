import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserManu/UserMenu';
import { Flex } from '@chakra-ui/react';
export const Header = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <Flex
      p={2}
      as="header"
      align="center"
      justify="space-between"
      borderBottomColor="black"
      borderBottom="2px"
      fontSize={24}
      fontWeight={500}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Flex>
  );
};
