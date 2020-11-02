import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import * as Styles from './styles';

const Modal = ({ isOpen, isModalLoading, contentModal }) => (
  <Styles.Background
    isOpen={isOpen}
  >
    <Styles.Modal>
      {
          isModalLoading ? <Spinner /> : contentModal
        }
    </Styles.Modal>
  </Styles.Background>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isModalLoading: PropTypes.bool.isRequired,
  contentModal: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Modal;
