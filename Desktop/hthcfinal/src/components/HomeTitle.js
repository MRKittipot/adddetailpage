import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button.common";
import styled from "styled-components";

const HomeTitle = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Inline key={uuidv4()}>
          <p>{props.title}</p>
          <Button title={props.title} onClick={() => navigate(props.path)} />
        </Inline>
        <hr />
      </div>
    </div>
  );
};

export default HomeTitle;

const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
