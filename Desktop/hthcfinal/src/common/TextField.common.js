import React from "react";
import styled from "styled-components";

const TextField = (props) => {
  return (
    <Box>
      <img src={props.icon} alt="" style={{ width: "30px" }} />
      <InputCustom {...props} />
    </Box>
  );
};

export default TextField;

const Box = styled.div`
  width: auto;
  border-radius: 30px;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  gap: 0.5rem;
  padding: 0.5vw 1vw;
  display: flex;
  align-items: center;
`;

const InputCustom = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 0;
  background-color: transparent;
  width: 200px;
`;
