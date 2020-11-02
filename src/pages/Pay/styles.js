import styled from 'styled-components';

const BackButton = styled.p`
  font-size: 1.8rem;
`;

const OperatorTitle = styled.div`
  display: flex;
  align-items: center;
`;

const OperatorLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;

const H2 = styled.h2`
  font-size: 2.4rem;
`;

const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 710px) {
    justify-content: center;
  }
`;

const InputTitle = styled.p`
  font-size: 1.8rem;
`;

const Input = styled.input`
  font-size: 1.8rem;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 40px;
`;

const SumbitButton = styled.input`
  width: 220px;
  height: 55px;
  margin: 0 auto;
  font-size: 1.8rem;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border: 1px solid #84fab0;
  border-radius: 10px;
  cursor: pointer;
`;

export {
  BackButton,
  H2,
  OperatorTitle,
  OperatorLogo,
  Inputs,
  InputTitle,
  Input,
  SumbitButton
};