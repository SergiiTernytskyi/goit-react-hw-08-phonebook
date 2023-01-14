import { Wrapper } from 'components/AppBar/AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { StyledLink } from './MainNav.styled';

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </>
      )}
    </Wrapper>
  );
};
