import React from "react";
import { Project } from "./Project";

type ProjectCardProps = {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (event: React.MouseEvent) => void;
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
    <div className="portfolio-item">
      <a
        className="portfolio-link"
        data-bs-toggle="modal"
        href="#portfolioModal1"
      >
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={project.imageUrl} alt={project.name} />
      </a>
      <div className="portfolio-caption">
        <div className="portfolio-caption-heading">{project.name}</div>
        <div className="portfolio-caption-subheading text-muted">
          {formatDescription(project.description)}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
