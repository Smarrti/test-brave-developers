import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: ${(props) => (props.isOpen ? '100%' : '0')};
  background: rgba(0, 0, 0, 0.5);
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  background: white;
  @media (max-width: 420px) {
    width: 100%;
    height: 100%;
  }
`;

export { Background, Modal };
