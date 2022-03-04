import React, { useState } from "react";
import { Project } from "./Project";

interface NewProjectFormProps {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

function NewProjectForm(props: NewProjectFormProps) {
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });
  const [projName, setProjName] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [projBudget, setProjBudget] = useState("");
  const [projImageUrl, setProjImageUrl] = useState("");
  const [projIsActive, setProjIsActive] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.project.name = projName;
    props.project.description = projDescription;
    props.project.budget = Number(projBudget);
    props.project.imageUrl = projImageUrl;
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
          setProjName(event.target.value);
        }}
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
          setProjDescription(event.target.value);
        }}
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
          setProjBudget(event.target.value);
        }}
      />
      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="text"
        name="imageUrl"
        placeholder="enter image url"
        onChange={(event) => {
          setProjImageUrl(event.target.value);
        }}
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
          onClick={props.onCancel}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default NewProjectForm;
