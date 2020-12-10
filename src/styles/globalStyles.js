import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import colors from './styleVars';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Montserrat Regular', sans-serif;
  }

  h1 {
    color: ${colors.black};
    font-family: 'Montserrat Black', sans-serif;
  }

  h2 {
    color: ${colors.white};
    background-color: ${colors.black};
    font-family: 'Montserrat Bold', sans-serif;
  }

  p {
    
  }
`;
