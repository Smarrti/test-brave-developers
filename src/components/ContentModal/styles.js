import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  margin: 0 auto;
  font-size: 1.6rem;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border: 1px solid #84fab0;
  border-radius: 10px;
  cursor: pointer;
`;

export { Content, Text, Button };
