import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

interface ProjectListProps {
  projects: Project[];
  // onSave: (project: Project) => void;
}

function ProjectList({ projects}: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  function handleEdit(project: Project) {
    setProjectBeingEdited(project);
  }

  function cancelEditing() {
    setProjectBeingEdited({});
  }

  const saveProject = (project: Project) => {
    const projId = String(project.id);
    const document = doc(db, "projects", projId);

    // Update the project in the database (firestore)
    const updateProject = async () => {
      await updateDoc(document, {
        name: project.name,
        description: project.description,
        budget: project.budget,
        imageUrl: project.imageUrl,
        isActive: project.isActive,
      });
    }

    // Need to update the projects list to reflect
    // the latest data from the edited project.
    updateProject().then(() => {
      projects.map((proj) => {
        if (proj.id === project.id){
          proj.name = project.name;
          proj.budget = project.budget;
          proj.description = project.description;
          proj.isActive = project.isActive;
        }
        return proj;
      });
      setProjectBeingEdited({});
      return;
    })
  };

  return (
    <div className="cards">
      {/*<ul className="row">*/}
      {projects.map((project) => (
        <div key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm
              onCancel={cancelEditing}
              onSave={saveProject}
              project={project}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
        </div>
      ))}
      {/*</ul>*/}
    </div>
  );
}

export default ProjectList;