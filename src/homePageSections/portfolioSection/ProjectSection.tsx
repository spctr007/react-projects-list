import React from "react";
import ProjectsPage from "../../projects/ProjectsPage";
import {useNavigate} from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <button type="button" className="btn btn-outline-primary" onClick={()=> {navigate("/new-project")}}>Add New Project</button>
        </div>
        <ProjectsPage />
      </div>
    </section>
  );
};

export default ProjectSection;