import styled from 'styled-components';

export const TitleText = styled.h1`
  font-size: ${p => p.theme.fontSizes.xxl}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.heading};

  color: ${p => p.theme.colors.secondary};
`;
