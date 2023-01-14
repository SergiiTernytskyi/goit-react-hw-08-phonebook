import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.space[2]}px 0;

  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.white};
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }
`;
