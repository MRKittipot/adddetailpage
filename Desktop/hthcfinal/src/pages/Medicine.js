import React from "react";
import TableCustom from "../common/TableCustom.common";
import styled from "styled-components";
import Layout from "../components/Layout";
import AuthProvider from "../provider/AuthProvider";
import { useFetch } from "../hooks/useFetch";

const Medicine = () => {
  const { data } = useFetch("medicine");

  return (
    <AuthProvider>
      <Layout>
        <Container>
          <Box>
            <Heading1>Medicine</Heading1>
          </Box>
          <TableCustom data={data} header={"medicine"} />
        </Container>
      </Layout>
    </AuthProvider>
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
