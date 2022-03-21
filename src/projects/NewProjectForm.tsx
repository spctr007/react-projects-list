import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Project } from "./Project";
import { validateField } from "./ProjectFormFieldValidation";
import LoginNavigation from "../login/LoginNavigation";

type NewProjectFormProps = {
  onCancel: (event: SyntheticEvent) => void;
  onReset: () => void;
  onSave: (project: Project) => void;
};

function NewProjectForm(props: NewProjectFormProps) {
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
    imageUrl: "",
  });
  const [projName, setProjName] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [projBudget, setProjBudget] = useState("");
  const [projIsActive, setProjIsActive] = useState("");

  function createImageUrlPath(code: number) {
    const imageUrl =
      "https://firebasestorage.googleapis.com/v0/b/react-projects-list.appspot.com/o/placeimg_500_300_arch";
    const extension =
      ".jpg?alt=media&token=749c6551-b90d-489f-9940-cb82a4da050d";
    const num = String(code);
    return imageUrl.concat(num, extension);
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const newProject = new Project();
    newProject.description = projDescription.trim();
    newProject.name = projName.trim();
    newProject.budget = Number(projBudget);
    // newProject.imageUrl = ImageUrlPaths[Math.floor(Math.random() * 12) + 1];
    newProject.imageUrl = createImageUrlPath(
      Math.floor(Math.random() * 12) + 1
    );
    newProject.isActive = Boolean(projIsActive);
    newProject.contractTypeId = Math.floor(Math.random() * 10) + 1;

    props.onSave(newProject);
  };

  function projectNameOnChange(event: ChangeEvent<HTMLInputElement>) {
    setErrors(validateField(event.target.name, event.target.value));
    if (errors.name.length === 0) {
      setProjName(event.target.value);
    }
  }

  function projectDescriptionOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setErrors(validateField(event.target.name, event.target.value));
    if (errors.name.length === 0) {
      setProjDescription(event.target.value);
    }
  }

  function projectBudgetOnChange(event: ChangeEvent<HTMLInputElement>) {
    setErrors(validateField(event.target.name, event.target.value));
    if (errors.name.length === 0) {
      setProjBudget(event.target.value);
    }
  }

  function projectIsActiveOnChange(event: ChangeEvent<HTMLInputElement>) {
    setProjIsActive(event.target.value);
  }

  return (
    <div className="bg-dark">
      <LoginNavigation />
      <section className="vh-25">
        <form data-testid="form-submission" onSubmit={handleSubmit}>
          <div className="container py-5 h-25">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">New Project</h3>
                    <div className="form-outline mb-4">
                      <label htmlFor="name">Project Name</label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="name"
                        placeholder="enter name"
                        onChange={projectNameOnChange}
                        required
                      />
                      {errors.name.length > 0 && (
                        <div className="alert alert-danger">
                          <p>{errors.name}</p>
                        </div>
                      )}
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="description">Project Description</label>
                      <textarea
                        className="form-control form-control-lg"
                        name="description"
                        placeholder="enter description"
                        onChange={projectDescriptionOnChange}
                        rows={6}
                        required
                      />
                      {errors.description.length > 0 && (
                        <div className="alert alert-danger">
                          <p>{errors.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="form-outline mb-4">
                      <label htmlFor="budget">Project Budget</label>
                      <input
                        className="form-control"
                        type="number"
                        name="budget"
                        placeholder="enter budget"
                        onChange={projectBudgetOnChange}
                        required
                      />
                      {errors.budget.length > 0 && (
                        <div className="alert alert-danger">
                          <p>{errors.budget}</p>
                        </div>
                      )}
                    </div>
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="isActive"
                        onChange={projectIsActiveOnChange}
                      />
                      <label className="form-check-label" htmlFor="isActive">
                        {" "}
                        Is Active?{" "}
                      </label>
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-success"
                        data-testid="on-save-button"
                      >
                        Save
                      </button>
                      <span />
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={props.onReset}
                        data-testid="on-reset-fields"
                      >
                        Reset Fields
                      </button>
                      <button
                        className="btn btn-danger"
                        data-testid="on-cancel-button"
                        onClick={props.onCancel}
                      >
                        Cancel
                      </button>
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NewProjectForm;
