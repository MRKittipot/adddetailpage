import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useSearchQuery } from "../hooks/useSearchQuery";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const PostCard = () => {
  const { searchQuery } = useSearchQuery();
  const { id } = useParams();

  return (
    <Layout>
      <Container>
        <Card />
      </Container>
    </Layout>
  );
};

export default PostCard;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
