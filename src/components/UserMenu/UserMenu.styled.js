import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const Button = styled.button`
  align-self: center;
  width: 100px;
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
