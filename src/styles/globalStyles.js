import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

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

  p {

  }
`;
