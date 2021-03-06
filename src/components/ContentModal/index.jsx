import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as Styles from './styles';
import good from '../../assets/ok.png';
import bad from '../../assets/bad.png';

const ContentModal = ({ type, message, setIsOpenModal }) => {
  const history = useHistory();
  return (
    <Styles.Content>
      {
        type === 'Good' ? <img src={good} alt="Good" /> : <img src={bad} alt="Bad" />
      }
      <Styles.Text>{message}</Styles.Text>
      <Styles.Button
        onClick={() => {
          if (type === 'Good') {
            history.push('/');
            console.log('Go home');
          } else {
            setIsOpenModal(false);
          }
        }}
      >
        Закрыть
      </Styles.Button>
    </Styles.Content>
  );
};

ContentModal.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};

export default ContentModal;
