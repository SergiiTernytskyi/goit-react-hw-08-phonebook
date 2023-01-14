import styled from 'styled-components';

export const TitleText = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.xxl}px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.heading};

  color: ${p => p.theme.colors.secondary};
`;
