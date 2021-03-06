import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3.5rem;
  @media (max-width: 580px) {
    text-align: center;
  }
`;

const Header = () => (
  <H1>Терминал оплаты</H1>
);

export default Header;
