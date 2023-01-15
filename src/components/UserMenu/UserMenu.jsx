import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, Name, Text, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Text>
        Welcome, <Name>{user.name}</Name>
      </Text>
      <Button type="button" onClick={logOutHandler}>
        Logout
      </Button>
    </Wrapper>
  );
};
