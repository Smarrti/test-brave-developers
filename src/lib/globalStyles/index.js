import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  };

  html {
    font-size: 15px;
    @media (max-width: 580px) {
      font-size: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;
