import React from "react";
import { Routes, Route } from "react-router-dom";
import AddData from "./pages/AddData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Medicine from "./pages/Medicine";
import News from "./pages/News";
import PostCard from "./pages/PostCard";

const App = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Home />} path="/home" />
      <Route element={<News />} path="/news" />
      <Route element={<Medicine />} path="/medicine" />
      <Route element={<AddData />} path="/post" />
      <Route element={<PostCard />} path="/card/:id" />
    </Routes>
  );
};

export default App;
