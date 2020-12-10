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
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2rem;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
    background-color: ${colors.white};
    border: 1px solid ${colors.black};
    border-radius: 3px;
    padding: 5px 10px;
    margin: 5px 10px;
  }
`;
