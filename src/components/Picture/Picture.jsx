import PropTypes from 'prop-types';
import { ImageThumb, ImgStyled, Info, Wrapper } from './Picture.styled';

export const Picture = ({ phonebook }) => {
  return (
    <Wrapper>
      <ImageThumb>
        <ImgStyled src={phonebook} alt={phonebook} />
      </ImageThumb>
      <Info>
        <p>
          {' '}
          Everything you need to manage your contacts. The Phonebook will help
          you quickly find the desired contact and keep your address book clear.
          It provides a central place for starting conversations.
        </p>
        <p>
          Phonebook is an easy to use contact manager that gives you opportunity
          for saving and viewing your contacts, so that you never lose your
          contacts.
        </p>
      </Info>
    </Wrapper>
  );
};

Picture.propTypes = {
  phonebook: PropTypes.string.isRequired,
};
