import React from 'react';
import good from '../../assets/ok.png';
import bad from '../../assets/bad.png';

const ContentModal = ({ type, message, setIsOpenModal }) => {
  return (
    <div>
      {
        type === 'Good' ? <img src={good} alt="Good" /> : <img src={bad} alt="Bad" />
      }
      <p>{message}</p>
      <button
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        Закрыть
      </button>
    </div>
  )
};

export default ContentModal;