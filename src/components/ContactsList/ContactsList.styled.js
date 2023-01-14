import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: calc(100% / 2 - ${p => p.theme.space[3]}px);
  }

  @media (min-width: 1200px) {
    flex-basis: calc(100% / 3 - ${p => p.theme.space[3]}px);
  }
`;
