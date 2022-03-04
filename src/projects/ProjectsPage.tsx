import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import { MOCK_PROJECTS_JSON } from "./MockProjectsJson";
// import {MOCK_PROJECTS_JSON} from "./MockProjectsJson";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const firebaseUrl =
    "https://react-projects-list-default-rtdb.firebaseio.com/projects.json";
  // const projectCollectionRef = collection(db, "projects");
  const docRef = collection(db, "projects");

  useEffect(() => {
    setLoading(true);

    const firestoreProjects = new Array<Project>();
    const getProjects = async () => {
      const projectDocSnapshot = await getDocs(docRef);
      if (projectDocSnapshot.docs.length > 0) {
        projectDocSnapshot.docs.forEach((doc) => {
          const proj = new Project({
            id: doc.id,
            budget: doc.get("budget"),
            contractSignedOn: doc.get("contractSignedOn"),
            contractTypeId: doc.get("contractTypeId"),
            description: doc.get("description"),
            imageUrl: doc.get("imageUrl"),
            isActive: doc.get("isActive"),
            name: doc.get("name"),
          });
          firestoreProjects.push(proj);
        });
        setProjects(firestoreProjects);
      } else {
        console.log("Document does not exist.");
      }
    };

    // const getProjects = async () => {
    //   const q = query(projectCollectionRef);
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc)=>{
    //     const proj = new Project({
    //       id : doc.id,
    //       budget: doc.get("budget"),
    //       contractSignedOn: doc.get("contractSignedOn"),
    //       contractTypeId: doc.get("contractTypeId"),
    //       description: doc.get("description"),
    //       imageUrl: doc.get("imageUrl"),
    //       isActive: doc.get("isActive"),
    //       name: doc.get("name")
    //     })
    //     firestoreProjects.push(proj);
    //     setProjects(firestoreProjects);
    //   })
    // }

    getProjects().catch(console.error);

    setLoading(false);
  }, [docRef]);

  //
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(firebaseUrl)
  //     .then((response) => response.data)
  //     .then((data) => {
  //       const projArray = [];
  //
  //       for (const key in data) {
  //         const proj = {
  //           id: key,
  //           ...data[key]
  //         };
  //         projArray.push(proj);
  //       }
  //       setLoading(false);
  //       setProjects(projArray);
  //     })
  // }, []);

  const saveProject = (project: Project) => {
    console.log(project);
    // projectAPI
    //   .post(project)
    //   .then((updatedProject) => {
    //     let updatedProjects = projects.map((p: Project) => {
    //       return p.id === project.id ? new Project(updatedProject) : p;
    //     });
    //     setProjects(updatedProjects);
    //   })
    //   .catch((e) => {
    //     setError(e.message);
    //   })
  };

  function sendData() {
    fetch(firebaseUrl, {
      method: "POST",
      body: JSON.stringify(MOCK_PROJECTS_JSON),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // the navigate HOOK redirects the current page to
      // the location/path set in the parameters.
      console.log(response.statusText);
    });
  }

  if (loading) {
    return (
      <div className="center-page">
        <span className="spinner primary" />
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span> {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList projects={projects} onSave={saveProject} />
      {/*<button className="tertiary">Send Data</button>*/}
    </div>
  );
};

export default ProjectsPage;
