import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useSearchQuery } from "../hooks/useSearchQuery";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import AuthProvider from "../provider/AuthProvider";
import { useFetchById } from "../hooks/useFetchById";

const PostCard = () => {
  const { searchQuery } = useSearchQuery();
  const { id } = useParams();
  const { data } = useFetchById(id);

  return (
    <AuthProvider>
      <Layout>
        <Container>
          <Card data={data} />
        </Container>
      </Layout>
    </AuthProvider>
  );
};

export default PostCard;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
