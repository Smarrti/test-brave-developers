import React from 'react';
import Spinner from '../Spinner';
import * as Styles from './styles';

const Modal = ({ isModalLoading }) => {
  return (
    <Styles.Background>
      <Styles.Modal>
        {
          isModalLoading ? <Spinner /> : <></>
        }
      </Styles.Modal>
    </Styles.Background>
  )
}

export default Modal;