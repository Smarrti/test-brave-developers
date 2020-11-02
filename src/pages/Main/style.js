import styled from 'styled-components';

const MainTitle = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const OperatorsList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 30px;
  @media (max-width: 1010px) {
    grid-template-columns: 100%;
  }
`;

const OpeatorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(
    90deg, 
    ${props => props.firstColor}, 
    ${props => props.secondColor});
  border-radius: 20px;
  box-shadow: 0 6px 18px 0 rgba(31, 34, 41, 0.18);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-15px);
    filter: brightness(120%);
  }
`;

const OperatorImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
`;

const OperatorName = styled.p`
  font-size: 1.6rem;
  color: white;
  margin-bottom: 10px;
`;

export { MainTitle, OperatorsList, OpeatorCard, OperatorImage, OperatorName };