import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);

    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  });

  const keyPressHandler = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const backdropClickHandler = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={backdropClickHandler}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.shape().isRequired,
  onClose: PropTypes.func.isRequired,
};
