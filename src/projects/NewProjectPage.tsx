import {addDoc, collection} from "firebase/firestore";
import React, {SyntheticEvent} from "react";
import NewProjectForm from "./NewProjectForm";
import {Project} from "./Project";
import {db} from "../firebase/firebase";
import {useNavigate} from "react-router-dom";


const NewProjectPage = () => {
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
        // Clears all the values of the input field in the page.
        Array.from(document.querySelectorAll("input")).forEach((input) => {
            input.value = "";
            input.checked = false;
        });

        Array.from(document.querySelectorAll("textarea")).forEach((textarea) => {
            textarea.value = "";
        });
    }

    function cancel(event: SyntheticEvent) {
        event.preventDefault();
        return navigate("/");
    }

    return (
        <div className="login-page">
            <NewProjectForm
                onSave={saveProject}
                onReset={resetFields}
                onCancel={cancel}/>

        </div>
    );
};

export default NewProjectPage;
