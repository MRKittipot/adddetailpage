import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import Medicines from "../assets/healthcare.json";
import LOGO from "../assets/Logo.svg";
import TextField from "../common/TextField.common";
import AccountIcon from "../assets/account.svg";
import PasswordIcon from "../assets/password.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box>
      <Container>
        <Grid onSubmit={handleSubmit}>
          <GridChild>
            <Lottie
              animationData={Medicines}
              loop={true}
              style={{ width: "600px" }}
            />
          </GridChild>
          <GridChild>
            <div>
              <BoxHeader>
                <div>
                  <img src={LOGO} alt="" />
                </div>
                <div>
                  <h3>Login</h3>
                </div>
              </BoxHeader>
              <div>
                <BoxForm>
                  <TextField
                    placeholder="Enter your Email"
                    icon={AccountIcon}
                    type="email"
                    onChange={handleChange}
                    name="email"
                  />
                  <TextField
                    placeholder="Password"
                    icon={PasswordIcon}
                    type="password"
                    onChange={handleChange}
                    name="password"
                  />
                </BoxForm>
              </div>
              <BoxBottom>
                <Chip type="submit">
                  <h5>Login</h5>
                </Chip>
              </BoxBottom>
            </div>
          </GridChild>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;

const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vw;
`;

const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 80vh;
  width: 100vw;
`;

const Grid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  > div:nth-child(1) {
    grid-column: 1 / 2;
  }

  > div:nth-child(2) {
    // background linear gradient

    grid-column: 2 / 3;
  }
`;

const GridChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div > img {
    height: 100px;
  }

  > div:nth-child(2) > h3 {
    border-bottom: 1px solid black;
  }
`;

const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const BoxBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1rem 0;
`;

const Chip = styled.button`
  border: 0;
  padding: 0.5vw 1vw;
  background-color: #5d8d73;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    background-color: #749f82;
  }
  transition: background-color 0.2s ease-in-out;

  > * {
    margin: auto;
    color: white;
  }
`;
