import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return <Nav>Navbar</Nav>;
};

export default Navbar;

const Nav = styled.div`
  width: 100vw;
  background: gray;
  height: 7vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
