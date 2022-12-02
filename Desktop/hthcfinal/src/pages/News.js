import React from "react";
import TableCustom from "../common/TableCustom.common";
import styled from "styled-components";
import Layout from "../components/Layout";
import AuthProvider from "../provider/AuthProvider";
import { useFetch } from "../hooks/useFetch";

const News = () => {
  const { data } = useFetch("news");

  return (
    <AuthProvider>
      <Layout>
        <Container>
          <Box>
            <Heading1>News</Heading1>
          </Box>
          <TableCustom data={data} header="news" />
        </Container>
      </Layout>
    </AuthProvider>
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
