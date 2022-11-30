import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <div>
        <Link onClick={() => navigate("/")}>Home</Link>
      </div>
    </Nav>
  );
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

const Link = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
  text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  transition: text-decoration-color 300ms;
  &:hover {
    text-decoration-color: rgba(255, 255, 255, 1);
  }
`;
