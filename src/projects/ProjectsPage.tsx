import React, {useEffect, useState} from 'react';
import ProjectList from "./ProjectList";
import {Project} from "./Project";
import axios from "axios";
import {MOCK_PROJECTS_JSON} from "./MockProjectsJson";
// import {MOCK_PROJECTS_JSON} from "./MockProjectsJson";


const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const firebaseUrl = "https://react-projects-list-default-rtdb.firebaseio.com/projects.json";

  useEffect(() => {
    setLoading(true);
    axios
      .get(firebaseUrl)
      .then((response) => response.data)
      .then((data) => {
        const projArray = [];

        for (const key in data) {
          const proj = {
            id: key,
            ...data[key]
          };
          projArray.push(proj);
        }
        setLoading(false);
        setProjects(projArray);
      })
  }, []);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      /*
      Component Communication:
      project.id of ProjectList --> from ProjectForm --> from ProjectFormProps
       */
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  }

  function sendData() {
    fetch(
      firebaseUrl,
      {
        method: "POST",
        body: JSON.stringify(MOCK_PROJECTS_JSON),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((response) => {
      // the navigate HOOK redirects the current page to
      // the location/path set in the parameters.
      console.log("blah blah");
    });
  }

  if (loading){
    return (
      <div className="card warning">
        <h1 className="primary">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={saveProject}/>
      {/*<button className="tertiary">Send Data</button>*/}
    </div>
  );
};

export default ProjectsPage;