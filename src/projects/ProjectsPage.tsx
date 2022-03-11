import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const firebaseUrl =
  //   "https://react-projects-list-default-rtdb.firebaseio.com/projects.json";
  const docRef = collection(db, "projects");
  // const navigate = useNavigate();

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

    getProjects().catch(console.error);

    setLoading(false);
  }, []);

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
                <span className="icon-alert inverse " /> {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList projects={projects} refreshProjectsPage={setProjects} />
    </div>
  );
};

export default ProjectsPage;
