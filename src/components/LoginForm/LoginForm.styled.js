import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  width: 100%;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.secondary};
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

export const LoginButton = styled.button`
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
`;
