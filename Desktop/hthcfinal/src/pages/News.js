import React from "react";
import TableCustom from "../common/TableCustom.common";
import { NewsMock } from "../mocks/NewsMock";
import styled from "styled-components";
import Layout from "../components/Layout";

const News = () => {
  return (
    <Layout>
      <Container>
        <Box>
          <Heading1>News</Heading1>
        </Box>
        <TableCustom data={NewsMock} />
      </Container>
    </Layout>
  );
};

export default News;

const Container = styled.div`
  margin-top: 5rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading1 = styled.h1``;
