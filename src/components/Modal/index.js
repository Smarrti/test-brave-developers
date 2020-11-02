import React from 'react';
import Spinner from '../Spinner';
import * as Styles from './styles';

const Modal = ({ isOpen, isModalLoading, contentModal }) => {
  return (
    <Styles.Background
      isOpen={isOpen}
    >
      <Styles.Modal>
        {
          isModalLoading ? <Spinner /> : contentModal
        }
      </Styles.Modal>
    </Styles.Background>
  )
}

export default Modal;