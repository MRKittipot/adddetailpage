import React from "react";
import styled from "styled-components";
import Button from "../common/Button.common";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";

const Card = (props) => {
  const [isEditAble, setIsEditAble] = React.useState(false);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    ref.current.focus();
  };

  const alertDelete = () => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      // deleteItem();
      navigate("/");
    }
  };
  return (
    <Box>
      <Flexbox>
        <div>
          <Header>
            <Heading1
              contentEditable="true"
              onInput={(e) => setIsEditAble(true)}
              suppressContentEditableWarning={true}
            >
              Title
            </Heading1>
            <Chip label="Medicine" />
          </Header>
          <div>
            <Text
              contentEditable="true"
              spellCheck="false"
              ref={ref}
              onInput={(e) => setIsEditAble(true)}
              suppressContentEditableWarning={true}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              labore maxime quod dolore repellendus placeat qui nostrum facere,
              impedit dolores tempora, minima consequuntur aut sint vitae
              quibusdam corporis repellat totam?
            </Text>
          </div>
        </div>
        <FormButton>
          <Button title="Delete" color="red" onClick={alertDelete} />
          {isEditAble ? (
            <Button title="Save" color="green" />
          ) : (
            <Button title="Edit" color="#344D67" onClick={handleClick} />
          )}
        </FormButton>
      </Flexbox>
    </Box>
  );
};

export default Card;

const Box = styled.div`
  border-top: 5px solid #00adb5;
  width: 60vw;
  height: 50vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2px;
  padding: 1vw 2vw;
  overflow: scroll;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  width: fit-content;
  padding: 0 0.1vw;
  outline: none;

  &:focus {
    border: 1px solid #549ef2;
    padding: 0 0.5vw;
    border-radius: 5px;
  }

  &:hover {
    border: 1px solid #549ef2;
    padding: 0 0.5vw;
    border-radius: 5px;
  }

  transition: all 0.3s ease-in-out;
`;

const FormButton = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  justify-content: flex-end;
  align-items: center;
`;

const Header = styled.div`
  padding: 1rem;
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Text = styled.p`
  color: #b2b2b2;
  outline: none;

  &:focus {
    border: 1px solid #549ef2;
    padding: 0 0.5vw;
    border-radius: 5px;
  }

  &:hover {
    border: 1px solid #549ef2;
    padding: 0 0.5vw;
    border-radius: 5px;
  }

  transition: all 0.3s ease-in-out;
`;
