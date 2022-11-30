import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useSearchQuery } from "../hooks/useSearchQuery";

const PostCard = () => {
  const { searchQuery } = useSearchQuery();

  console.log(searchQuery);

  return (
    <Container>
      <Card />
    </Container>
  );
};

export default PostCard;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
