import React from 'react';
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
          } else {
            setIsOpenModal(false)
          }      
        }}
      >
        Закрыть
      </Styles.Button>
    </Styles.Content>
  )
};

export default ContentModal;