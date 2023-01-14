import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const InputWrapper = styled.div`
  position: relative;
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

  :valid,
  :focus {
    border: 1px solid ${p => p.theme.colors.secondary};
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
    transform: translateX(20px) translateY(-8px);
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  left: 0;
  padding: ${props => props.theme.space[2]}px;
  pointer-events: none;
  color: ${props => props.theme.colors.text};
  transition: all 250ms ease-out;
`;

export const AddButton = styled.button`
  align-self: center;
  width: 150px;
  height: 50px;
  margin-bottom: ${p => p.theme.space[4]}px;

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
