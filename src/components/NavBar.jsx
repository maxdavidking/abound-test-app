import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  min-height: 4rem;
  justify-content: center;
  align-items: center;
`;

const NavBar = () => (
  <Nav>
    <h1>Abound Test App</h1>
  </Nav>
);

export default NavBar;
