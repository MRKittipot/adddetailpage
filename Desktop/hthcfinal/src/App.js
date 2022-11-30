import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
      </Routes>
    </Layout>
  );
};

export default App;
