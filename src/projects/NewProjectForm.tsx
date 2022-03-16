import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Project } from "./Project";
import { validateField } from "./ProjectFormFieldValidation";
import ImageUrlPaths from "./imageUrlPaths";

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

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const newProject = new Project();
    newProject.description = projDescription.trim();
    newProject.name = projName.trim();
    newProject.budget = Number(projBudget);
    newProject.imageUrl = ImageUrlPaths[Math.floor(Math.random() * 12) + 1];
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
    <form className="" data-testid="form-submission" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Project Name</label>
        <input
            className="form-control"
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
      <div className="form-group">
        <label htmlFor="description">Project Description</label>
        <textarea
            className="form-control"
            name="description"
            placeholder="enter description"
            onChange={projectDescriptionOnChange}
            required
        />
        {errors.description.length > 0 && (
            <div className="alert alert-danger">
              <p>{errors.description}</p>
            </div>
        )}
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="isActive">Active?</label>
          <div className="input-group mb-3">
                <input
                    type="checkbox"
                    name="isActive"
                    onChange={projectIsActiveOnChange}
                />
          </div>

        </div>
        <div className="form-group">
          <button className="btn btn-success" data-testid="on-save-button">
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
      </div>

    </form>
  );
}

export default NewProjectForm;
