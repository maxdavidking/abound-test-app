import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import colors from './styleVars';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: ${colors.black};
  }

  h2 {
    color: ${colors.white};
    background-color: ${colors.black};
  }
`;
