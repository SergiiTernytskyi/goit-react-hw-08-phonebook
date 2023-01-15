import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  min-width: 250px;
  min-height: 50px;
  gap: 4px;

  background-color: ${p => p.theme.colors.primary};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.first};
`;

export const ContactName = styled.span`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  min-width: 70px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;

export const ContactPhone = styled.span`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s}px;
  color: ${p => p.theme.colors.text};
  min-width: 70px;

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.round};
  border: 2px solid ${p => p.theme.colors.secondary};

  color: ${p => p.theme.colors.secondary};
  cursor: pointer;
  transition: border-color 250ms ease-out, color 250ms ease-out;

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.background};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[1]}px;
`;
