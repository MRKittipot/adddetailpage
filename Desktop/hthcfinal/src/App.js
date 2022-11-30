import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddData from "./pages/AddData";
import Home from "./pages/Home";
import Medicine from "./pages/Medicine";
import News from "./pages/News";
import PostCard from "./pages/PostCard";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Medicine />} path="/medicine" />
        <Route element={<AddData />} path="/add" />
        <Route element={<PostCard />} path="/card/:id" />
      </Routes>
    </Layout>
  );
};

export default App;
