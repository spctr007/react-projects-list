import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Modal from "../modalComponents/Modal";
import Backdrop from "../modalComponents/Backdrop";

interface ProjectListProps {
  projects: Project[];
  refreshProjectsPage: (projects: Project[]) => void;
}

function ProjectList(props: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(new Project());

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
    };

    // Need to update the projects list to reflect
    // the latest data from the edited project.
    updateProject().then(() => {
      props.projects.map((proj) => {
        if (proj.id === project.id) {
          proj.name = project.name;
          proj.budget = project.budget;
          proj.description = project.description;
          proj.isActive = project.isActive;
        }
        return proj;
      });
      setProjectBeingEdited({});
      return;
    });
  };

  function deleteProject(project: Project) {
    const deleteProjectFromFirebase = async () => {
      const projId = String(project.id);
      await deleteDoc(doc(db, "projects", projId));
    };

    deleteProjectFromFirebase().then(() => {
      let projTemp = props.projects.filter((proj) => proj.id !== project.id);
      setModalIsOpen(false);
      props.refreshProjectsPage(projTemp);
    });
  }

  function showConfirmationBox(project: Project) {
    setProjectToDelete(project);
    setModalIsOpen(true);
  }

  return (
    <div className="cards">
      {modalIsOpen}
      {/*<ul className="row">*/}
      {props.projects.map((project) => (
        <div key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm
              onCancel={cancelEditing}
              onSave={saveProject}
              project={project}
            />
          ) : (
            <ProjectCard
              project={project}
              onEdit={handleEdit}
              onDelete={() => {
                showConfirmationBox(project);
              }}
            />
          )}
        </div>
      ))}
      {/*</ul>*/}
      {modalIsOpen && (
        <Modal
          onCancel={() => {
            setModalIsOpen(false);
          }}
          project={projectToDelete}
          onConfirm={() => {
            deleteProject(projectToDelete);
          }}
        />
      )}
      {modalIsOpen && (
        <Backdrop
          onClick={() => {
            setModalIsOpen(false);
          }}
        />
      )}
      {modalIsOpen}
    </div>
  );
}

export default ProjectList;
