import React, {useState} from 'react';
import {Project} from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({projects, onSave}: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  function handleEdit(project: Project) {
    setProjectBeingEdited(project);
  }

  function cancelEditing(){
    setProjectBeingEdited({});
  }

  return (
    <div className="cards">
      {/*<ul className="row">*/}
        {projects.map((project) => (
          <div key={project.id}>
            {project === projectBeingEdited ? (
              <ProjectForm onCancel={cancelEditing} onSave={onSave} project={project}/>
            ) : (
              <ProjectCard project={project} onEdit={handleEdit}/>
            )}
          </div>
        ))}
      {/*</ul>*/}
    </div>
  );
}

export default ProjectList;