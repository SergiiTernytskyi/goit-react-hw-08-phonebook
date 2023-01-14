import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    }

ul,
ol {
  margin: 0;
  padding: 0;
}

img{ 
  display: block;
  max-width: 100%;
  height: auto;
  
}
 
 body {
  margin: 0;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.body};

  background-color: ${p => p.theme.colors.background};
}

main {
  flex-grow: 1;
  padding: 0;
}
`;
