import React from "react";
import styled from "styled-components";
import Center from "../common/Center.common";
import HomeTitle from "../components/HomeTitle";
import Layout from "../components/Layout";
import { v4 as uuidv4 } from "uuid";
import AuthProvider from "../provider/AuthProvider";

const Home = () => {
  const Title = [
    {
      title: "News",
      path: "/news",
    },
    {
      title: "Medicine",
      path: "/medicine",
    },
    {
      title: "Post",
      path: "/post",
    },
  ];

  return (
    <AuthProvider>
      <Layout>
        <Center>
          <Container>
            <div>
              <div>
                <Heding1Custom>Health Care</Heding1Custom>
              </div>
              <div>
                <hr />
              </div>
              <div>
                {Title.map((item) => {
                  return <HomeTitle {...item} key={uuidv4()} />;
                })}
              </div>
            </div>
          </Container>
        </Center>
      </Layout>
    </AuthProvider>
  );
};

export default Home;

const Container = styled.div`
  width: 1000px;
  height: 500px;
  background-color: antiquewhite;
  border-radius: 10px;
  padding: 10px;
`;

const Heding1Custom = styled.h1`
  text-align: center;
`;
