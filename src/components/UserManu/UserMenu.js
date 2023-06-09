import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={dispatch(logOut)}>
        Log out
      </button>
    </div>
  );
};
