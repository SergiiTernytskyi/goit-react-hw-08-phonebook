import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: ${props => props.theme.space[2]}px;

  font-size: ${props => props.theme.fontSizes.l}px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primaryText};
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii.normal};

  transition: all 250ms ease-out;

  :valid,
  :focus {
    border: 1px solid ${props => props.theme.colors.secondary};
    outline-color: ${p => p.theme.colors.secondary};
  }

  :valid ~ span,
  :focus ~ span {
    padding: 0 ${props => props.theme.space[2]}px;
    font-size: ${props => props.theme.fontSizes.s}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.secondary};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.background};
    border-left: 1px solid ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.secondary};
    transform: translateX(20px) translateY(-23px);
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  left: 0;
  padding: ${props => props.theme.space[2]}px;
  pointer-events: none;
  /* text-transform: uppercase; */
  font-size: ${props => props.theme.fontSizes.l}px;
  color: ${props => props.theme.colors.primary};
  transition: all 250ms ease-out;
`;
