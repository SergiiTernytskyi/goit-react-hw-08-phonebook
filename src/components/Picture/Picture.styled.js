import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const ImageThumb = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  flex-grow: 1;
  border-radius: ${p => p.theme.radii.large};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.first};
  width: 100%;

  @media (min-width: 1200px) {
    margin-bottom: 0;
    width: 70%;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.7;
`;

export const Info = styled.div`
  padding: ${p => p.theme.space[3]}px;
  width: 100%;

  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.l}px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.first};

  @media (min-width: 1200px) {
    width: 30%;
  }
`;
