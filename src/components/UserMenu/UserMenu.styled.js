import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s}px;
  color: ${p => p.theme.colors.text};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m}px;
  }
`;

export const Name = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.white};

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l}px;
  }
`;

export const Button = styled.button`
  align-self: center;
  width: 90px;
  height: 30px;

  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.text};
  border: transparent;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.first};

  cursor: pointer;
  transition: all 250ms ease-out;

  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }
`;
