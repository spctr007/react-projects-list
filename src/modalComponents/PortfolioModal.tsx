import React from "react";
import { Project } from "../projects/Project";

type PortfolioModalProps = {
  project: Project;
};

const PortfolioModal = ({project} : PortfolioModalProps) => {
    const projectName = project.name.replace(/[^A-Za-z]+/g, "");
    return (
      <div
        className="portfolio-modal modal fade"
        id={projectName}
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">{project.name}</h2>
                    <p/>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={project.imageUrl}
                      alt="..."
                    />
                    <p>{project.description}</p>
                    <ul className="list-inline">
                        <li>
                            <strong>Contract Type ID: </strong>
                            {project.contractTypeId}
                        </li>
                      <li>
                        <strong>Is Active? </strong>
                        {project.isActive ? "Yes" : "No"}
                      </li>
                      <li>
                        <strong>Project Budget : $ </strong>
                        {project.budget.toLocaleString()}.00
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times me-1"/>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PortfolioModal;