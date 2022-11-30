import React from "react";
import TableCustom from "../common/TableCustom.common";
import { MedicineMock } from "../mocks/MedicineMock";
import styled from "styled-components";

const Medicine = () => {
  return (
    <Container>
      <Box>
        <Heading1>Medicine</Heading1>
      </Box>
      <TableCustom data={MedicineMock} />
    </Container>
  );
};

export default Medicine;

const Container = styled.div`
  margin-top: 5rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading1 = styled.h1``;
