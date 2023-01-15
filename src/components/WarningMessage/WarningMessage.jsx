import { PropTypes } from 'prop-types';
import { Error } from './WarningMessage.styled';

export const WarningMessage = ({ children }) => {
  return <Error>{children}</Error>;
};

WarningMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
