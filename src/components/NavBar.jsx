import React from 'react';
import styled from 'styled-components';
import colors from '../styles/styleVars';

const Nav = styled.nav`
  display: flex;
  background-color: ${colors.black};
  min-height: 4rem;
  color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const NavBar = () => <Nav>Abound Test App</Nav>;

export default NavBar;
