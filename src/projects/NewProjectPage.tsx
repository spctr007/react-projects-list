import { addDoc, collection } from "firebase/firestore";
import React from "react";
import NewProjectForm from "./NewProjectForm";
import { Project } from "./Project";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const NewProjectPage = () => {
  const newProject = new Project();
  const projectCollectionRef = collection(db, "projects");
  const navigate = useNavigate();

  function saveProject(project: Project) {
    //create async function that saves the data
    // to firebase.
    //===================
    const createProject = async () => {
      await addDoc(projectCollectionRef, {
        name: project.name,
        budget: project.budget,
        contractSignedOn: project.contractSignedOn,
        contractTypeId: project.contractTypeId,
        description: project.description,
        imageUrl: project.imageUrl,
        isActive: project.isActive,
      });
    };
    //========================
    // navigate away from the current page.
    createProject().then(() => {
      return navigate("/");
    });
  }

  function resetFields() {
    /*
        Clear all the values of the input field in the page.
         */
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
      input.checked = false;
    });

    Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
      textarea.value = "";
    });
  }

  return (
    <div>
      New Project Page
      <NewProjectForm
        project={newProject}
        onSave={saveProject}
        onCancel={resetFields}
      />
    </div>
  );
};

export default NewProjectPage;
