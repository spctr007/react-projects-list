import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";
import { validateField } from "./ProjectFormFieldValidation";
import ImageUrlPaths from "./imageUrlPaths";

interface NewProjectFormProps {
  project: Project;
  onCancel: (event: SyntheticEvent) => void;
  onReset: () => void;
  onSave: (project: Project) => void;
}

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
  // const [projImageUrl, setProjImageUrl] = useState("");
  const [projIsActive, setProjIsActive] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    props.project.name = projName.trim();
    props.project.description = projDescription.trim();
    props.project.budget = Number(projBudget);
    props.project.imageUrl = ImageUrlPaths[Math.floor(Math.random() * 12) + 1];
    props.project.isActive = Boolean(projIsActive);
    props.project.contractTypeId = Math.floor(Math.random() * 10) + 1;

    props.onSave(props.project);
  };

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={(event) => {
          setErrors(validateField(event.target.name, event.target.value));
          if (errors.name.length === 0) {
            setProjName(event.target.value);
          }
        }}
        required
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        onChange={(event) => {
          setErrors(validateField(event.target.name, event.target.value));
          if (errors.description.length === 0) {
            setProjDescription(event.target.value);
          }
        }}
        required
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        onChange={(event) => {
          setErrors(validateField(event.target.name, event.target.value));
          if (errors.budget.length === 0) {
            setProjBudget(event.target.value);
          }
        }}
        required
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        onChange={(event) => {
          setProjIsActive(event.target.value);
        }}
      />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="bordered medium"
          onClick={props.onReset}
        >
          Reset Fields
        </button>
        <button className="secondary bordered medium" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewProjectForm;
