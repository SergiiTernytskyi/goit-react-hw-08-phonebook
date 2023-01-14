import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.text};
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: all 250ms ease-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
