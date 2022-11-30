import React from "react";
import styled from "styled-components";

const Center = (props) => {
  return <CenterCustom>{props.children}</CenterCustom>;
};

export default Center;

const CenterCustom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
