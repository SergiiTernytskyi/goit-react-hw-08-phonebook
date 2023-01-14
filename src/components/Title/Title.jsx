import PropTypes from 'prop-types';
import { TitleText } from './Title.styled';

export const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

Title.propTypes = {
  children: PropTypes.string,
};
