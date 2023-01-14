import { StyledLink, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">LogIn</StyledLink>
    </Wrapper>
  );
};
