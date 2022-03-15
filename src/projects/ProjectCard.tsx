import React from "react";
import { Project } from "./Project";

type ProjectCardProps = {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (event : React.MouseEvent) => void;
};

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;

  function handleEditClick(projectBeingEdited: Project) {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      onEdit(projectBeingEdited);
    };
  }

  function formatDescription(description: string): string {
    return description.substring(0, 50) + "...";
  }

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : $ {project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={handleEditClick(project)}>
          <span className="icon-edit" />
          Edit
        </button>
        <button className="secondary" onClick={props.onDelete}>
          Delete
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
