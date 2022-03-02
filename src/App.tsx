import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import ProjectsPage from "./projects/ProjectsPage";
import Layout from "./layout/Layout";
import NewProjectPage from "./projects/NewProjectPage";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProjectsPage/>}>
        </Route>
        <Route path="/new-project" element={<NewProjectPage/>}/>
      </Routes>
    </Layout>

  );
}

export default App;
