import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    width: 600px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Label = styled.label`
  max-width: 300px;
  flex-basis: calc(100% / 2 - ${p => p.theme.space[3]}px);

  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondary};

  @media (min-width: 768px) {
    margin-bottom: none;
  }
`;

export const Input = styled(Field)`
  padding: ${p => p.theme.space[2] + 2}px;
  width: 100%;

  font-size: ${p => p.theme.fontSizes.l}px;

  background-color: transparent;
  color: ${p => p.theme.colors.secondary};
  border: 1px solid ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.normal};

  transition: all 250ms ease-out;

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.secondary};
    outline-color: ${p => p.theme.colors.secondary};
  }

  ::placeholder {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AddButton = styled.button`
  align-self: center;
  width: 150px;
  height: 50px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;

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

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
