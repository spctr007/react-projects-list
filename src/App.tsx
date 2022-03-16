import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import MainPage from "./layout/MainPage";
import NewProjectPage from "./projects/NewProjectPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-project" element={<NewProjectPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
