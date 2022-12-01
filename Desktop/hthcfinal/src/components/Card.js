import React from "react";
import styled from "styled-components";
import Button from "../common/Button.common";
import { useNavigate, useParams } from "react-router-dom";
import { Chip } from "@mui/material";

const Card = (props) => {
  const [isEditAble, setIsEditAble] = React.useState(false);

  const [form, setForm] = React.useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const textReference = React.useRef(null);

  const handleClick = () => {
    setIsEditAble(true);
    textReference.current.focus();
  };

  const handleChange = (e, value) => {
    setIsEditAble(true);
    setForm({ ...form, [value]: e.currentTarget.textContent });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditAble(false);
    console.log(form);
  };

  const alertDelete = () => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      // deleteItem();
      navigate(`/${id}`);
    }
  };
  return (
    <Box>
      <Flexbox>
        <div>
          <Header>
            <Heading1
              contentEditable={isEditAble}
              onInput={(e) => handleChange(e, "title")}
              suppressContentEditableWarning={true}
              edit={isEditAble}
            >
              Title
            </Heading1>
            <Chip label={id} />
          </Header>
          <div>
            <Text
              contentEditable={true}
              spellCheck="false"
              ref={textReference}
              onInput={(e) => handleChange(e, "description")}
              suppressContentEditableWarning={true}
              edit={isEditAble}
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
            <Button title="Save" color="green" onClick={handleSubmit} />
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

  ${(props) =>
    props.edit
      ? `
      &:hover {
        border: 1px solid #549ef2;
        padding: 0 0.5vw;
        border-radius: 5px;
      }
  `
      : ""}

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

  ${(props) =>
    props.edit
      ? `
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
      `
      : ""}

  transition: all 0.3s ease-in-out;
`;
