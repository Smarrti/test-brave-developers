import { createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  };

  body {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;