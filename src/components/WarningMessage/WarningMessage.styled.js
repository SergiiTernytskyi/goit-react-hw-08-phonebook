import styled from 'styled-components';

export const Error = styled.div`
  width: 100%;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  text-align: center;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
