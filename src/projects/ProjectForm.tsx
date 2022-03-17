import React, { SyntheticEvent, useState } from "react";
import { Project } from "./Project";
import { isValid, validate } from "./ProjectFormFieldValidation";

type ProjectFormProps = {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
};

function ProjectForm({
  project: initialProject, // assign an alias to the project prop to avoid same name usage with the useState.
  onCancel,
  onSave,
}: ProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid(errors)) return;
    onSave(project);
  };

  function handleChange(event: any) {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === "checkbox" ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;
    /* Need to do functional update b/c
          the new project state is based on the previous project state
          so that we can keep the project properties that aren't being edited +like project.id
          The spread operator (...) is used to
          spread the previous project properties and the new change
         */
    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });
    setErrors(() => validate(updatedProject));
  }

  return (
    <div className="container portfolio-item">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><strong> Project Name</strong></label>
          <input
              className="form-control"
              type="text"
              name="name"
              placeholder="enter name"
              value={project.name}
              onChange={handleChange}
          />
          {errors.name.length > 0 && (
              <div className="card error">
                <p>{errors.name}</p>
              </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description"><strong>Project Description</strong></label>
          <textarea
              className="form-control"
              name="description"
              placeholder="enter description"
              value={project.description}
              onChange={handleChange}
              rows={6}
          />
          {errors.description.length > 0 && (
              <div className="card error">
                <p>{errors.description}</p>
              </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="budget"><strong>Project Budget</strong></label>
          <input
              className="form-control"
              type="number"
              name="budget"
              placeholder="enter budget"
              value={project.budget}
              onChange={handleChange}
          />
          {errors.budget.length > 0 && (
              <div className="card error">
                <p>{errors.budget}</p>
              </div>
          )}
        </div>
        <div className="form-check">
          <label htmlFor="isActive">Active?</label>
          <input
              className="form-check-input me-lg-2"
              type="checkbox"
              name="isActive"
              checked={project.isActive}
              onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <button className="btn btn-primary mr-1">Save</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
