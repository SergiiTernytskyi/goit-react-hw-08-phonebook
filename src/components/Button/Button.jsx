import PropTypes from 'prop-types';
import { StyledButton, Wrapper } from './Button.Styled';

export const Button = ({ type, onClick, children }) => {
  return (
    <Wrapper>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
