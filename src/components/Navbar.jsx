import React from 'react';
import styled from 'styled-components';

const NavbarStyles = styled.div`
  width: 100%;
  padding: 20px 40px;
  background: hsl(180, 60%, 40%);
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, 150px);
  align-items: center;
  a {
    color: white;
    font-size: 18pt;
    font-family: system-ui;
    &:hover {
      color: hsl(10, 40%, 70%);
    }
    transition: all 0.1s ease-in-out;
  }
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Navbar = ({ children }) => <NavbarStyles>{children}</NavbarStyles>;

export default Navbar;
