import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import Button from "./Button.common";

const FormLayout = (props) => {
  const { handleSubmit } = props;
  const [FormData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleChangeSelect = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box onSubmit={handleSubmit}>
      <div>
        <InLine>
          <p>Title : &nbsp;</p>
          <TextField
            name="title"
            onChange={handleChange}
            value={FormData.title}
            label="Title"
            required
          />
        </InLine>
        <div>
          <InLine>
            <p>Role : &nbsp;</p>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleChangeSelect}
                required
              >
                <MenuItem value={"Medical"}>Medical</MenuItem>
                <MenuItem value={"News"}>News</MenuItem>
              </Select>
            </FormControl>
          </InLine>
        </div>
      </div>
      <div>
        <TextArea
          name="description"
          onChange={handleChange}
          placeholder="description"
        />
      </div>
      <Button type="submit" title="submit" />
    </Box>
  );
};

export default FormLayout;

const Box = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
  flex-direction: column;
`;

const InLine = styled.div`
  display: inline-flex;
  gap: 2rem;
  padding: 0.5rem 0;
  > div {
    width: 300px;
  }
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 200px;
  padding: 1vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus + label {
    color: #000;
  }

  &:valid + label {
    color: #000;
  }

  &:valid {
    border: 1px solid #000;
  }

  &:invalid {
    border: 1px solid #f00;
  }

  &:invalid + label {
    color: #f00;
  }

  &:invalid + label::after {
    content: "Please fill out this field";
    color: #f00;
    font-size: 0.8rem;
  }

  &:valid + label::after {
    content: "Looks good!";
    color: #0f0;
    font-size: 0.8rem;
  }
`;
